import React from "react";
import "./styles.css";

export default class Pool extends React.Component {
  render() {
    const { poolData, speed, ordinal, posConfig, active } = this.props;

    return (
      <div className="grid-2-columns">
        {(() =>
          poolData.map((pool, idx) => {
            let animationConfig =
              ordinal[active] <= posConfig[idx]
                ? {
                    animationName: `${pool.pos}-col-${ordinal[idx]}`,
                    animationDuration: `${speed || "2000"}ms`
                  }
                : {};
            if (idx !== active) {
              animationConfig = {
                ...animationConfig,
                animationPlayState: "paused"
              };
            }
            return (
              <div
                className={`grid-col ${pool.pos} ${
                  active === idx ? "active" : "inactive"
                }`}
                style={{
                  backgroundImage: `url(${pool.img})`,
                  ...animationConfig
                }}
              />
            );
          }))()}
      </div>
    );
  }
}
