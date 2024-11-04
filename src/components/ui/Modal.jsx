import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with absolute positioning */}
      <div 
        className="absolute top-0 left-0 w-full bg-black/50"
        style={{ 
          position: 'fixed', // Changed to fixed
          width: '100%',
          height: '100vh', // Use viewport height
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          top: 0,
          left: 0
        }}
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div 
        style={{ 
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 50
        }}
      >
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-4">{message}</p>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;