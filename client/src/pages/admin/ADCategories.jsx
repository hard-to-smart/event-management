import React, { useState } from "react";
import CategoryForm from "../../components/category/CategoryForm";
import Modal from "../../components/modal";
import Categories from "../../components/category/Categories";

const ADCategories = () => {
  // Add category modal state and handler
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-auto h-[80vh] font-poppinsrounded-lg shadow-md flex ">
      {/* Displaying categories list */}
      <Categories />
      <button
        onClick={handleOpenModal}
        className="absolute z-10 right-10 ring-2 ring-offset-2 ring-[#906766] bottom-20 hover:bg-[#906766] text-white font-semibold p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform bg-[#8d7e73] hover:scale-105 active:scale-95"
      >
        Create New Category
      </button>
      {/* Add category modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        element={<CategoryForm onClose={handleCloseModal} />}
      />
    </div>
  );
};

export default ADCategories;