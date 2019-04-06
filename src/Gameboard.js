import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import CustomModal from "./components/CustomModal";
import Pool from "./components/Pool";
import { Link } from "react-router-dom";

import { MAX, closest } from "./utils/rotate";
import {
  S3Left,
  S3Right,
  S4Right,
  S5Right,
  S6Right,
  S7Right,
  S8Right
} from "./constants";
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
    ],
    S4Right: [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17],
      [8, 18, 19, 20, 21, 22],
      [14, 22, 23, 24, 25],
      [7, 25, 26, 27, 28, 29]
    ],
    S5Right: [
      [0, 1, 2, 3, 4, 5],
      [2, 6, 7, 8, 9, 10],
      [0, 11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20, 21],
      [13, 22, 23, 24, 25, 26],
      [0, 26, 27, 28]
    ],
    S6Right: [
      [0, 1, 2, 3, 4, 5],
      [1, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16],
      [4, 11, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25],
      [16, 27, 28, 29, 30, 31]
    ],
    S7Right: [[], [], [0, 1, 2, 3, 4, 5], [2, 6, 7, 8, 9, 10], [], []],
    S8Right: [[], [], [], [], [0, 1, 2, 3, 4, 5], []]
  }
};
const RIGHT_MAP = {
  3: { name: `S3Right`, value: S3Right },
  4: { name: `S4Right`, value: S4Right },
  5: { name: `S5Right`, value: S5Right },
  6: { name: `S6Right`, value: S6Right },
  7: { name: `S7Right`, value: S7Right },
  8: { name: `S8Right`, value: S8Right }
};
const HANZI_MAP = {
  S3Left: {
    S3Right: [
      ["执", "扫", "托", "扛", "扩", "扚"],
      ["汛", "汤", "汕", "江", "汗", "池"],
      ["钗", "钏", "钓", "钒", "钎", "钍"],
      [],
      [],
      []
    ],
    S4Right: [
      ["投", "技", "抓", "抢", "扶", "把"],
      ["汹", "汰", "沤", "沐", "沥", "汫"],
      ["忪", "怀", "怅", "忧", "忷", "忡"],
      ["盼", "眉", "眍", "看", "眈", "眨"],
      ["贬", "贩", "货", "贫", "购", "账"],
      ["钩", "钢", "钥", "钨", "钛", "钠"]
    ],
    S5Right: [
      ["拎", "拐", "拉", "拦", "拥", "拇"],
      ["泻", "泄", "泣", "泼", "泪", "河"],
      ["怦", "怯", "怡", "怕", "怵", "怜"],
      ["眑", "眜", "眠", "眬", "眩", "眏"],
      ["贵", "费", "贷", "贱", "贻", "贸"],
      ["钾", "铃", "铆", "铁"]
    ],
    S6Right: [
      ["挖", "拱", "挥", "持", "挂", "挡"],
      ["洲", "洋", "洗", "洒", "浇", "洪"],
      ["恌", "恸", "恂", "恹", "恼", "恨"],
      ["眼", "眺", "眭", "眸", "眯", "眶"],
      ["贿", "赁", "赂", "赃", "贼", "资"],
      ["铗", "铰", "铠", "铝", "银", "铜"]
    ],
    S7Right: [
      [],
      [],
      ["悯", "悚", "悌", "悔", "悟", "悦"],
      ["睐", "睑", "睆", "睇", "睄", "睃"],
      [],
      []
    ],
    S8Right: [[], [], [], [], ["赐", "赌", "赋", "赔", "赏", "赎"], []]
  }
};
const MAX_CARD_STACK = 120;
const TARGET_MIDDLE = 180;
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
          let angleArray = this.state.charArray.map((group, groupIdx) =>
            group.map(
              (char, charIdx) =>
                ((charIdx % this.state.charArray[groupIdx].length) * 120 +
                  state.position[groupIdx]) %
                (MAX_CARD_STACK * this.state.charArray[groupIdx].length)
            )
          );
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

        let lastElement = Math.max(...angleArray[this.state.active]);
        angleArray[this.state.active][
          angleArray[this.state.active].findIndex(e => e === lastElement)
        ] =
          lastElement -
          MAX_CARD_STACK * this.state.charArray[this.state.active].length -
          120;
        console.log(lastElement, angleArray);
        this.setState((state, props) => ({
          target,
          angleArray
        }));
        console.log(
          this.state.charArray[LEFT][target[0]],
          this.state.charArray[RIGHT][target[1]]
        );
        if (this.state.active === 1) {
          let match = target;
          let result = CHAR_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
            match[LEFT]
          ].includes(match[RIGHT]);
          if (result) {
            this.setState(state => ({
              meta: {
                pp1: this.state.charArray[LEFT][match[LEFT]],
                pp2: this.state.charArray[RIGHT][match[RIGHT]],
                result:
                  HANZI_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
                    match[LEFT]
                  ][
                    CHAR_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
                      match[LEFT]
                    ].findIndex(idx => idx === match[RIGHT])
                  ],
                pp1Definition: "",
                pp2Definition: "",
                resultDefinition: "",
                py: ""
              }
            }));
            this.handleShow();
          }
        }
        break;
      case 2:
        clearInterval(this.intervalID);
        let tempPosition = [0, 0];
        this.setState(state => ({
          position: tempPosition,
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
          <Button size="lg">Back</Button>
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
