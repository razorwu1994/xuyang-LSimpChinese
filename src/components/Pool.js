import React from "react";
import "../styles.css";
import { carouselStyle } from "../utils/rotate";

const topConfig = {
  23: "149.5",
  31: "164.5",
  32: "164.5",
  11: "120",
  6: "60"
};
export default class Pool extends React.Component {
  render() {
    const { poolData } = this.props;
    return (
      <div className="grid-2-columns">
        {poolData.map((pool, idx) => {
          return (
            <div className="poolWrapper">
              <div class="float" />
              {idx === this.props.active && <div class="floatBolder" />}
              <div class="scene">
                <div class="carousel">
                  {pool.charArray.map((char, id) => {
                    return (
                      <div
                        style={carouselStyle(
                          id,
                          pool.angleArray[id],
                          pool.charArray.length
                        )}
                        className="carousel__cell"
                      >
                        {char}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
