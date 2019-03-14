import React from "react";
import "./styles.css";

import CustomModal from "./components/CustomModal";
import Pool from "./components/Pool";

import left from "./images/left-6.svg";
import right from "./images/right-6.svg";

import zhua from "./images/zhua.png";
const SPACE_KEY = 32;
const FONT_HEIGHT = 135;
const LEFT = 0,
  RIGHT = 1;
const MAX_PHASE = 3;
const CHAR_MAP = {
  TISHOU: { BA: [[0, 2], [1, 4, 5], [], [], [], []] }
};
const SIZE_MAP = {
  TISHOU: 6,
  BA: 6
};
class App extends React.Component {
  state = {
    active: LEFT,
    position: [FONT_HEIGHT, FONT_HEIGHT], //set to take first character in svg
    pool: ["TISHOU", "BA"],
    result: null,
    show: false
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        let position = state.position;
        position[state.active] = (position[state.active] - 50) % 100000;
        return {
          position: position
        };
      });
    }, 100);
    document.addEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = event => {
    event.preventDefault();
    if (!this.state.show) {
      switch (event.keyCode) {
        case SPACE_KEY:
          this._adjustPosition();
          break;
        default:
          break;
      }
    }
  };

  _adjustPosition = () => {
    let position = this.state.position;
    switch (this.state.active) {
      case 0:
      case 1:
        //0:left,1:right,2:final
        position[this.state.active] =
          parseInt(position[this.state.active] / FONT_HEIGHT, 10) * FONT_HEIGHT;

        this.setState((state, props) => ({
          position: position
        }));
        if (this.state.active === 1) {
          //get right,left index by checking size map, start at 135 px.
          let leftIdx = Math.abs(
              (position[LEFT] / FONT_HEIGHT - 1) %
                SIZE_MAP[this.state.pool[LEFT]]
            ),
            rightIdx = Math.abs(
              (position[RIGHT] / FONT_HEIGHT - 1) %
                SIZE_MAP[this.state.pool[RIGHT]]
            );

          let result = CHAR_MAP[this.state.pool[LEFT]][this.state.pool[RIGHT]][
            leftIdx
          ].includes(rightIdx);
          this.setState(state => ({
            result
          }));
          console.log(result);
          if (result) {
            this.handleShow();
          }
        }
        break;
      case 2:
        this.setState(state => ({
          position: [FONT_HEIGHT, FONT_HEIGHT],
          result: null
        }));
        break;
      case 3:
        //RESET
        break;
      default:
        break;
    }
    this.setState((state, props) => ({
      active: state.active < MAX_PHASE ? state.active + 1 : 0
    }));
  };

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

        <div className="grid-container">
          <div>
            <div className="verticalCentralDiv" />
          </div>
          <div className="poolWrapper">
            <div className="finalLine" />
            <Pool
              poolData={[
                { img: left, pos: "right" },
                { img: right, pos: "left" }
              ]}
              active={this.state.active}
              position={this.state.position}
            />{" "}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
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
          <div />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
