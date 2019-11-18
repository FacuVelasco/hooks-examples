import React, { useState } from "react";

export const Modal = ({ message }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    toggleModal();
    // some fail action
  };

  const handleSuccess = () => {
    toggleModal();
    // some other success
  };

  return (
    <div className="example">
      {open && (
        <div className="modal-container" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Crappy Modal</h3>
            <img
              src="https://i.redd.it/q3fw9j91o7v31.png"
              width="350px"
              alt="doom"
            ></img>
            <div>{message}</div>
            <button style={{ alignSelf: "flex-end" }} onClick={handleSuccess}>
              OK
            </button>
          </div>
        </div>
      )}
      <button onClick={toggleModal}>OPEN MODAL</button>
    </div>
  );
};
