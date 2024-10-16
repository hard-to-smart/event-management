import React, { useState } from 'react'
import Events from '../../components/Events';
import EventForm from '../../components/forms/EventForm'
import Modal from '../../components/modal';
const ADEvents = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  return (

    <div>
        <Events/>
        <button
        onClick={handleOpenModal}
        className="absolute z-10 right-4 bottom-8 bg-purple-600 text-white p-2 rounded"
      >
        Create New Event
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        element={<EventForm onClose={handleCloseModal} />}
      />
    </div>
  )
}

export default ADEvents