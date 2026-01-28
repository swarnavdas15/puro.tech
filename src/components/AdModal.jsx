import React from 'react';

const AdModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-[90%] max-w-2xl bg-black border border-red-600/30 rounded-xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default AdModal;
