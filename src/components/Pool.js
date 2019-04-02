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
              <div
                class="scene"
                style={{
                  perspective: `${(800 * pool.charArray.length) / 16}px`
                }}
              >
                <div class="carousel">
                  {pool.charArray.map((char, id) => {
                    return (
                      <div
                        style={carouselStyle(
                          id,
                          pool.unit,
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
