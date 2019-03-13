import React from "react";
import "./styles.css";

import Button from "./components/Button";
import Pool from "./components/Pool";

import left from "./images/left-6.svg";
import right from "./images/right-6.svg";

const SPACE_KEY = 32;
const FONT_HEIGHT = 135;
const LEFT = 0,
  RIGHT = 1;

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
    left: "TISHOU",
    right: "BA",
    result: false
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
    switch (event.keyCode) {
      case SPACE_KEY:
        this._adjustPosition();
        break;
      default:
        break;
    }
  };

  _adjustPosition = () => {
    let position = this.state.position;
    //0:left,1:right,2:final
    position[this.state.active] =
      parseInt(position[this.state.active] / FONT_HEIGHT, 10) * FONT_HEIGHT;
    this.setState((state, props) => ({
      active: state.active < 2 ? state.active + 1 : LEFT,
      position: position
    }));
    if (this.state.active === 2) {
      //get right,left index by checking size map, start at 135 px.
      let leftIdx = Math.abs(
          (position[LEFT] / FONT_HEIGHT - 1) % SIZE_MAP[this.state.left]
        ),
        rightIdx = Math.abs(
          (position[RIGHT] / FONT_HEIGHT - 1) % SIZE_MAP[this.state.right]
        );

      this.setState(state => ({
        result: CHAR_MAP[this.state.left][this.state.right][leftIdx].includes(
          rightIdx
        )
      }));
      console.log(this.state.result);
    }
  };
  render() {
    return (
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
          <div style={{ textAlign: "center" }}>
            {!this.state.result && (
              <h2>
                <strong>Press Space to Select Character </strong>
              </h2>
            )}
            {this.state.result && (
              <h1
                style={{
                  color: "coral",
                  fontSize: "100px"
                }}
              >
                <strong>Congrats </strong>
              </h1>
            )}
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default App;
