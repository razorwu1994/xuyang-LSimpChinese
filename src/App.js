import React from "react";
import "./styles.css";
import Results from "./components/Results";
import Row from "./components/Row";
import Button from "./components/Button";
import Pool from "./components/Pool";
class App extends React.Component {
  state = {
    mode: "vertical"
  };
  render() {
    return (
      <div className="grid-container">
        <div>
          <div className="verticalCentralDiv">
            <Button
              label={"switch mode"}
              className="modeController"
              onClick={() =>
                this.setState((state, props) => ({
                  mode: state.mode === "vertical" ? "horizontal" : "vertical"
                }))
              }
            />
            <h4>Current Mode: Vertical</h4>
          </div>
        </div>
        <div className="marginDiv">
          <Pool mode={this.state.mode} />{" "}
        </div>
        <div />
      </div>
    );
  }
}

export default App;
