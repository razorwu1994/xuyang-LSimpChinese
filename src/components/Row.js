import React from "react";

export default class Row extends React.Component {
  constructor() {
    super();
    // this.state = { value: 0 };
    // this.counterIntervalFunction = this.counterIntervalFunction.bind(this);
    // this.clearCounterInterval = this.clearCounterInterval.bind(this);
  }

  componentWillMount() {
    // var interval = setInterval(this.counterIntervalFunction, this.props.speed);
    // this.setState({ interval: interval });
  }

  //   counterIntervalFunction() {
  //     if (this.props.isRunning && this.props.direction === "ltr") {
  //       var value = this.state.value < 2 ? this.state.value + 1 : 0;
  //       this.setState({ value: value });
  //       this.props.setRotatingValue(this.props.index, this.state.value);
  //     } else if (this.props.isRunning && this.props.direction === "rtl") {
  //       var value = this.state.value > 0 ? this.state.value - 1 : 2;
  //       this.setState({ value: value });
  //       this.props.setRotatingValue(this.props.index, this.state.value);
  //     } else {
  //       this.clearCounterInterval();
  //     }
  //   }

  //   clearCounterInterval() {
  //     clearInterval(this.state.interval);
  //   }

  render() {
    // var activeRowIndex = this.props.data.activeRowIndex;
    // var activeClass = this.props.index === activeRowIndex ? "active" : "";
    // var columnsClassList = "columns columns-" + this.props.name;
    // var wrapperClassList = "row " + activeClass;
    // var animation = this.props.direction + "-transition-" + this.state.value;
    // var style = {
    //   animationName: animation,
    //   animationDuration: this.props.speed + "ms"
    // };

    // return (
    //   <div className={wrapperClassList}>
    //     <div className={columnsClassList} style={style}>
    //       <div className="column" />
    //       <div className="column" />
    //       <div className="column" />
    //     </div>
    //   </div>
    // );
    return (
      <div>
        <div />
        <div />
        <div />
      </div>
    );
  }
}
