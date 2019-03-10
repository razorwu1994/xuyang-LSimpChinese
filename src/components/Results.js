import React from "react";

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ["3UP", "5UP", "2UP", "No Prize"]
    };
  }

  render() {
    var shown = this.props.shown ? "shown" : "";
    var classList = "results " + shown;
    return (
      <div className={classList}>{this.state.messages[this.props.prize]}</div>
    );
  }
}
