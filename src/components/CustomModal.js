import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";

export default function CustomModal({ show, handleClose, meta }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Body>
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
              <Button className="glyphicon-volume" audio={meta.audio} />{" "}
              {meta.py}
            </p>
            <p className="descriptive-p">English:{meta.defition}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
