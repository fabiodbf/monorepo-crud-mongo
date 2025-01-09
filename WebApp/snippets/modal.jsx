import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
