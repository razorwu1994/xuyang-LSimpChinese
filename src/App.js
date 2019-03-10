import React from "react";
import { observer } from "mobx-react";
import "./styles.css";

const App = observer(props => (
  <div>
    <div className="helper">Press a key or tap on mobile </div>
    <div className="pool">
      <div className="first" />
      <div className="second" />
    </div>
  </div>
));

export default App;
