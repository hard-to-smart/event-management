import React, { useState } from 'react'
import CategoryForm from '../../components/forms/CategoryForm'
import Modal from '../../components/modal';
import { useSelector } from 'react-redux';
import { selectCategoryList } from '../../redux/slices/categorySlice';

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const categoryList = useSelector(selectCategoryList);
  console.log(categoryList);
  return (
    <div>
    <div>CategoryMngmnt</div>
    <button onClick={handleOpenModal} className="bg-purple-600 text-white p-2 rounded">
        Create New Category
      </button>
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} element={<CategoryForm/>}/>
    </div>
  )
}

export default Categories