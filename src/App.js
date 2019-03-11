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
    postConfig: [7, 7],
    active: 0
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        let ordinal = state.ordinal;
        ordinal[state.active] =
          ordinal[state.active] < 7 ? ordinal[state.active] + 1 : 0;
        return {
          ordinal: ordinal
        };
      });
    }, 1000);
    document.addEventListener("keydown", this._handleKeyDown);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return (
  //   //   nextState.ordinal[this.state.active] !==
  //   //   this.state.ordinal[this.state.active]
  //   // );
  // }

  _handleKeyDown = event => {
    event.preventDefault();
    switch (event.keyCode) {
      case SPACE_KEY:
        this.setState((state, props) => ({
          active: state.active < 1 ? state.active + 1 : 0
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
        <div className="marginDiv">
          <Pool
            poolData={[
              { img: left, pos: "left" },
              { img: right, pos: "right" }
            ]}
            ordinal={this.state.ordinal}
            speed={1000}
            posConfig={this.state.postConfig}
            active={this.state.active}
          />{" "}
          <div style={{ textAlign: "center" }}>
            <h4>Press Space to Select Character</h4>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default App;
