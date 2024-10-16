import React from 'react';

const Modal = ({ isOpen, onClose , element}) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button onClick={onClose} className=" text-gray-500 hover:text-gray-700 absolute top-2 right-2">
          X
          </button>
      
        {element}
      </div>
    </div>
  );
};

export default Modal;
