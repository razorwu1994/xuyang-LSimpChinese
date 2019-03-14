import React from "react";
import { Modal } from "react-bootstrap";
import "./styles.css";

export default function CustomModal({
  show,
  handleClose,
  pinyin,
  definition,
  backgroundImage
}) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Body>
        <div
          className="hanziWrapper"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.9
          }}
        />
        <div className="infoWrapper">
          {[
            { text: pinyin, title: "Pinyin" },
            { title: "Definition", text: definition }
          ].map((info, idx) => (
            <React.Fragment>
              <strong>{info.title}</strong>
              <p>{info.text}</p>
            </React.Fragment>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}
