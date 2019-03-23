import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import CustomModal from "./components/CustomModal";
import Pool from "./components/Pool";
import { Link } from "react-router-dom";

import { MAX, getFacingUp } from "./utils/rotate";
import { S3Left, S3Right } from "./constants";
import zhua from "./images/zhua.png";
const SPACE_KEY = 32;
const LEFT = 0,
  RIGHT = 1;
const MAX_PHASE = 3;
const CHAR_MAP = {
  S3Left: {
    S3Right: [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 12],
      [5, 11, 12, 13, 14, 15],
      [],
      [],
      []
    ]
  }
};

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.route);
    this.state = {
      active: LEFT,
      position: [0, 0], //set to take first character in svg
      pool: ["S3Left", "S3Right"],
      result: null,
      show: false,
      angleArray: [[], []],
      charArray: [S3Left, S3Right],
      unit: [S3Left, S3Right].map(group =>
        parseFloat(MAX / group.length, 10).toFixed(2)
      )
    };
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
          const deg =
            (8 / this.state.charArray[state.active].length) *
            Math.max(0.8, Math.random());
          let position = state.position;
          position[state.active] = (position[state.active] + deg) % 360;
          let angleArray = state.charArray.map((group, groupIdx) =>
            group.map(
              (char, charIdx) =>
                (charIdx * state.unit[groupIdx] + state.position[groupIdx]) %
                360
            )
          );
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
    }
  };
  _adjustPosition = () => {
    let { position, angleArray } = this.state;

    switch (this.state.active) {
      case 0:
      case 1:
        //0:left,1:right,2:final
        position[this.state.active] =
          position[this.state.active] +
          (MAX - getFacingUp(this.state.angleArray[this.state.active])); //add the difference
        angleArray = this.state.charArray.map((group, groupIdx) =>
          group.map(
            (char, charIdx) =>
              (charIdx * this.state.unit[groupIdx] +
                this.state.position[groupIdx]) %
              360
          )
        );
        this.setState((state, props) => ({
          position,
          angleArray
        }));
        if (this.state.active === 1) {
          let match = this._determineMatch();
          let result = CHAR_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
            match[LEFT]
          ].includes(match[RIGHT]);
          this.setState(state => ({
            result
          }));
          if (result) {
            this.handleShow();
          }
        }
        break;
      case 2:
        clearInterval(this.intervalID);
        this.setState(state => ({
          position: [0, 0],
          result: null
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
          pinyin={"Zhua"}
          definition={"Grab"}
          backgroundImage={zhua}
        />
        <Link to="/">
          <Button size="lg">Back</Button>
        </Link>
        <div className="grid-container">
          <div className="top" />
          <div className="middle">
            <Pool
              poolData={[
                {
                  angleArray: this.state.angleArray[0],
                  charArray: this.state.charArray[0],
                  unit: this.state.unit[0]
                },
                {
                  angleArray: this.state.angleArray[1],
                  charArray: this.state.charArray[1],
                  unit: this.state.unit[1]
                }
              ]}
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
