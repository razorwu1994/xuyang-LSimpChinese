import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";

const IColor = [
  "执",
  "汛",
  "钓",
  "投",
  "汹",
  "忪",
  "盼",
  "贬",
  "钩",
  "拎",
  "泻",
  "怦",
  "眑",
  "贵",
  "钾",
  "挖",
  "洲",
  "恌",
  "眼",
  "贿",
  "铗",
  "悯",
  "睐",
  "赐"
];

const IIColor = [
  "扫",
  "汤",
  "钗",
  "技",
  "汰",
  "怅",
  "眉",
  "贩",
  "钢",
  "拐",
  "泄",
  "怯",
  "眜",
  "费",
  "铃",
  "拱",
  "洋",
  "恸",
  "眺",
  "赁",
  "铰",
  "悚",
  "睑",
  "赌"
];

const IIIColor = [
  "托",
  "汕",
  "钏",
  "抓",
  "沤",
  "忷",
  "眍",
  "货",
  "钥",
  "拉",
  "泣",
  "怡",
  "眠",
  "贷",
  "铆",
  "挥",
  "洗",
  "恂",
  "眭",
  "赂",
  "铠",
  "悌",
  "睆",
  "赋"
];

const IVColor = [
  "扛",
  "江",
  "钒",
  "抢",
  "沐",
  "忡",
  "看",
  "贫",
  "钨",
  "拦",
  "泼",
  "怕",
  "眬",
  "贱",
  "铎",
  "持",
  "洒",
  "恹",
  "眸",
  "赃",
  "铝",
  "悔",
  "睇",
  "赔"
];
const VColor = [
  "扩",
  "汗",
  "钎",
  "扶",
  "沥",
  "怀",
  "眈",
  "购",
  "钛",
  "拥",
  "泪",
  "怵",
  "眩",
  "贻",
  "铅",
  "挂",
  "浇",
  "恼",
  "眯",
  "贼",
  "银",
  "悟",
  "睄",
  "赏"
];
const VIColor = [
  "扚",
  "洲",
  "钍",
  "把",
  "汫",
  "忧",
  "眨",
  "账",
  "钠",
  "拇",
  "河",
  "怜",
  "眏",
  "贸",
  "铁",
  "挡",
  "洪",
  "恨",
  "眶",
  "资",
  "铜",
  "悦",
  "睃",
  "赎"
];
const colorDictionary = [
  "#BA5656",
  "#D6C76B",
  "#62A583",
  "#6CADB5",
  "#486CA0",
  "#896BB7"
];
const calcColor = result => {
  if (IColor.includes(result)) return colorDictionary[0];
  if (IIColor.includes(result)) return colorDictionary[1];
  if (IIIColor.includes(result)) return colorDictionary[2];
  if (IVColor.includes(result)) return colorDictionary[3];
  if (VColor.includes(result)) return colorDictionary[4];
  if (VIColor.includes(result)) return colorDictionary[5];
};
export default function CustomModal({ show, handleClose, meta }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Body style={{ background: calcColor(meta.result) }}>
        <div className="def-wrapper">
          <div className="def-col">
            <h2 className="square-border-sm red-border pianpang-font">
              {meta.pp1}
            </h2>
            <p className="descriptive-p">{meta.pp1Definition}</p>
          </div>
          <div className="symbol-span">+</div>

          <div className="def-col">
            <h2 className="square-border-sm red-border pianpang-font">
              {meta.pp2}
            </h2>
            <p className="descriptive-p"> {meta.pp2Definition}</p>
          </div>

          <div className="symbol-span">=</div>
          <div className="def-col">
            <h1 className="square-border-md red-border hanzi-font">
              {meta.result}
            </h1>
            <p className="descriptive-p">
              Pronunciation:
              {meta.py}
            </p>
            <p className="descriptive-p">English:{meta.resultDefinition}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
