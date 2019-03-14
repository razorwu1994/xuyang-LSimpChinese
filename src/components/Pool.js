import React from "react";
import "../styles.css";

export default class Pool extends React.Component {
  render() {
    const { poolData, position, active } = this.props;

    return (
      <div className="grid-2-columns">
        {(() =>
          poolData.map((pool, idx) => {
            return (
              <div
                className={`grid-col ${pool.pos} `}
                style={{
                  backgroundImage: `url(${pool.img})`,
                  backgroundPosition: `${pool.pos} ${position[idx]}px`
                }}
              >
                {" "}
                {active === idx && <div className={`cube ${pool.pos}`} />}
              </div>
            );
          }))()}
      </div>
    );
  }
}
