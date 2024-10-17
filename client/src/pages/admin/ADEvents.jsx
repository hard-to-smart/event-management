import React, { useState } from 'react'
import Events from '../../components/event/Events';
import EventForm from '../../components/event/EventForm'
import Modal from '../../components/modal';
const ADEvents = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  return (

    <div className="relative  font-poppins">
      <div className="flex flex-col flex-grow overflow-y-scroll">
        <Events />
      </div>
        <button
        onClick={handleOpenModal}
        className="absolute z-10 right-10 ring-2 ring-offset-2 ring-[#906766] bottom-20 hover:bg-[#906766] text-white font-semibold p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform bg-[#8d7e73] hover:scale-105 active:scale-95"
      >
        Create New Event
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        element={<EventForm handleOpenModal={handleOpenModal} onClose={handleCloseModal} />}
      />
    </div>
  )
}

export default ADEvents