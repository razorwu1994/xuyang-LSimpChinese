import React from "react";
import "./styles.css";
import left from "../images/left.svg";
import right from "../images/right.svg";

export default function Pool({ mode }) {
  switch (mode) {
    case "vertical":
      return (
        <div className="grid-2-columns">
          <div className="grid-col">{left}</div>
          <div className="grid-col">{right}</div>
        </div>
      );
    case "horizontal":
    default:
      return (
        <div className="grid-3-rows">
          <div>Row1</div>
          <div>Row2</div>
          <div>Row3</div>
        </div>
      );
  }
}
