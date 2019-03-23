import React from "react";
import "../styles.css";
import { carouselStyle } from "../utils/rotate";
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
                  perspective: `${(1000 * pool.charArray.length) / 16}px`,
                  top: `${(130 * pool.charArray.length) / 20}px`
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
