import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import CustomModal from "./components/CustomModal";
import Pool from "./components/Pool";
import { Link } from "react-router-dom";

import { closest } from "./utils/rotate";
import {
  S3Left,
  S3Right,
  SPACE_KEY,
  LEFT,
  RIGHT,
  MAX_PHASE,
  CHAR_MAP,
  RIGHT_MAP,
  HANZI_MAP,
  MAX_CARD_STACK,
  TARGET_MIDDLE,
  RESULT_DICTIONARY,
  ppDictionary,
  pyDictionary
} from "./constants";

class Gameboard extends React.Component {
  state = {
    active: LEFT,
    position: [0, 0], //set to take first character in svg
    result: null,
    show: false,
    angleArray: [[], []],
    pool: ["S3Left", "S3Right"],
    charArray: [S3Left, S3Right],
    meta: {
      pp1: "",
      pp2: "",
      result: "",
      py: "",
      pp1Definition: "",
      pp2Definition: "",
      resultDefinition: ""
    },
    target: {}
  };
  componentWillMount() {
    if (this.props.location.params == null) {
      this.props.history.push("/");
    } else {
      let rightSet = RIGHT_MAP[this.props.location.params.stroke];
      this.setState(state => ({
        pool: ["S3Left", rightSet.name],
        charArray: [S3Left, rightSet.value]
      }));
    }
  }

  componentDidMount() {
    this.rotate(10);
    document.addEventListener("keydown", this._handleKeyDown);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  rotate(interval) {
    this.intervalID = setInterval(() => {
      if (this.state.active < 2) {
        this.setState((state, props) => {
          const speed = 1.2;
          let position = state.position;
          position[state.active] =
            (position[state.active] + speed) %
            (MAX_CARD_STACK * this.state.charArray[state.active].length);

          let angleArray;
          if (state.angleArray[1].length === 0) {
            angleArray = this.state.charArray.map((group, groupIdx) =>
              group.map(
                (char, charIdx) =>
                  ((charIdx % this.state.charArray[groupIdx].length) * 120 +
                    state.position[groupIdx]) %
                  (MAX_CARD_STACK * this.state.charArray[groupIdx].length)
              )
            );
          } else {
            angleArray = state.angleArray;
            angleArray[state.active] = this.state.charArray[state.active].map(
              (char, charIdx) =>
                ((charIdx % this.state.charArray[state.active].length) * 120 +
                  state.position[state.active]) %
                (MAX_CARD_STACK * this.state.charArray[state.active].length)
            );
          }
          let lastElement = Math.max(...angleArray[state.active]);
          angleArray[state.active][
            angleArray[state.active].findIndex(e => e === lastElement)
          ] =
            lastElement -
            MAX_CARD_STACK * (this.state.charArray[state.active].length - 1) -
            120;
          return {
            position,
            angleArray
          };
        });
      }
    }, interval);
  }
  _handleKeyDown = event => {
    if (!this.state.show) {
      switch (event.keyCode) {
        case SPACE_KEY:
          event.preventDefault();
          this._adjustPosition();
          break;
        default:
          break;
      }
    } else {
      this.setState(state => ({ show: false }));
    }
  };
  _adjustPosition = () => {
    let { angleArray, target, position } = this.state;
    if (!target) target = {};
    switch (this.state.active) {
      case 0:
      case 1:
        //0:left,1:right,2:final
        let targetIndx = angleArray[this.state.active].findIndex(
          a =>
            Math.round(a) ===
            Math.round(closest(angleArray[this.state.active], TARGET_MIDDLE))
        );
        target[this.state.active] = targetIndx;
        let diff =
          closest(angleArray[this.state.active], TARGET_MIDDLE) - TARGET_MIDDLE;
        let tempPosition = position.slice();
        tempPosition[this.state.active] =
          tempPosition[this.state.active] - diff;
        let tempAngleArray = angleArray.slice();
        tempAngleArray[this.state.active] = tempAngleArray[
          this.state.active
        ].map(angle => angle - diff);

        this.setState((state, props) => ({
          target,
          angleArray: tempAngleArray,
          position: tempPosition
        }));

        if (this.state.active === 1) {
          let match = target;
          let result = CHAR_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
            match[LEFT]
          ].includes(match[RIGHT]);
          if (result) {
            result =
              HANZI_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
                match[LEFT]
              ][
                CHAR_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
                  match[LEFT]
                ].findIndex(idx => idx === match[RIGHT])
              ];
            this.setState(state => ({
              meta: {
                pp1: this.state.charArray[LEFT][match[LEFT]],
                pp2: this.state.charArray[RIGHT][match[RIGHT]],
                result: result,
                pp1Definition:
                  ppDictionary[this.state.charArray[LEFT][match[LEFT]]],
                pp2Definition:
                  ppDictionary[this.state.charArray[RIGHT][match[RIGHT]]],
                resultDefinition: RESULT_DICTIONARY[result],
                py: pyDictionary[result]
              }
            }));
            this.handleShow();
          } else {
            this.setState((state, props) => ({
              result
            }));
          }
        }
        break;
      case 2:
        clearInterval(this.intervalID);
        let resetPos = [0, 0];
        this.setState(state => ({
          position: resetPos,
          result: null,
          target: {}
        }));
        break;
      case 3:
        //RESET
        this.rotate(10);
        break;
      default:
        break;
    }
    this.setState((state, props) => ({
      active: state.active < MAX_PHASE ? state.active + 1 : 0
    }));
  };

  _determineMatch = () =>
    this.state.angleArray.map(group => group.findIndex(angle => angle === 0));

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <React.Fragment>
        <CustomModal
          show={this.state.show}
          handleClose={this.handleClose}
          meta={this.state.meta}
        />
        <Link to="/">
          <Button
            size="lg"
            style={{
              background: "#ff7807",
              color: "white",
              borderColor: "#ff7807"
            }}
          >
            Back
          </Button>
        </Link>
        <div className="grid-container">
          <div className="top" />
          <div className="middle">
            <Pool
              poolData={[
                {
                  angleArray: this.state.angleArray[0],
                  charArray: this.state.charArray[0]
                },
                {
                  angleArray: this.state.angleArray[1],
                  charArray: this.state.charArray[1]
                }
              ]}
              active={this.state.active}
            />
          </div>
          <div className="bottom">
            <h1 className="result">
              <strong>
                {this.state.result != null
                  ? this.state.result
                    ? "Congrats"
                    : "Oops,try again"
                  : "Press Space to Select Character "}
              </strong>
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gameboard;
