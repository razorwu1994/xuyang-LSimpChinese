import React from "react";
import "./styles.css";

import Button from "./components/Button";
import Pool from "./components/Pool";

import left from "./images/left-6.svg";
import right from "./images/right-6.svg";

const SPACE_KEY = 32;

class App extends React.Component {
  state = {
    ordinal: [0, 0],
    postConfig: [4, 7],
    active: 0,
    position: [0, 0]
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        let position = state.position;
        position[state.active] = (position[state.active] + 50) % 100000;
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
        this.setState((state, props) => ({
          active: state.active < 2 ? state.active + 1 : 0
        }));
        break;
      default:
        break;
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
            ordinal={this.state.ordinal}
            speed={1000}
            posConfig={this.state.postConfig}
            active={this.state.active}
            position={this.state.position}
          />{" "}
          <div style={{ textAlign: "center" }}>
            <h2>
              <strong>Press Space to Select Character</strong>
            </h2>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default App;
