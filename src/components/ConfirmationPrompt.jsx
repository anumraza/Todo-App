import React from 'react';
import './ConfirmationPrompt.css';

const ConfirmationPrompt = ({ show, onConfirm, onCancel, message }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-actions">
          <button className="confirm-btn" onClick={onConfirm}>Yes</button>
          <button className="cancel-btn" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};



export default ConfirmationPrompt;