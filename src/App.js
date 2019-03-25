import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import { ButtonGroup, Button, Row, Col } from "react-bootstrap";
import Gameboard from "./Gameboard";

import "./styles.css";
const history = createHistory();

const BGHOC = WrappedComponet => {
  class withBGHOC extends React.Component {
    render() {
      return (
        <div className="outerWrapper">
          <WrappedComponet {...this.props} />
        </div>
      );
    }
  }
  return withBGHOC;
};
class Landing extends React.Component {
  state = {
    stroke: 3
  };
  selectStroke(stroke) {
    this.setState((state, props) => ({ stroke }));
  }
  render() {
    let style = { background: "#007bff", color: "white" };
    return (
      <React.Fragment>
        <ButtonGroup size="lg" className="btnGroup">
          <Row className="styledRow">
            {[3, 4, 5].map(stroke => (
              <Col xs={4}>
                <Button
                  id={stroke}
                  className="styleBtn"
                  size="lg"
                  type="checkbox"
                  name="radio"
                  onClick={() => this.selectStroke(stroke)}
                  style={this.state.stroke === stroke ? style : null}
                >
                  strokes {stroke}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="styledRow">
            {[6, 7, 8].map(stroke => (
              <Col xs={4}>
                <Button
                  id={stroke}
                  className="styleBtn"
                  size="lg"
                  type="checkbox"
                  name="radio"
                  onClick={() => this.selectStroke(stroke)}
                  style={this.state.stroke === stroke ? style : null}
                >
                  strokes {stroke}
                </Button>
              </Col>
            ))}
          </Row>
        </ButtonGroup>
        <div className="centerDiv">
          <Link
            to={{
              pathname: "/game",
              params: { stroke: this.state.stroke }
            }}
          >
            <Button size="lg">Start</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <Router history={history} basename="/xuyang-LSimpChinese/">
      <Switch>
        <Route exact path="/" component={BGHOC(Landing)} />
        <Route exact path="/game" component={BGHOC(Gameboard)} />
      </Switch>
    </Router>
  );
}

export default App;
