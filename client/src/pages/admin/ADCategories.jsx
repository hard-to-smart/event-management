import React, { useEffect, useState } from "react";
import CategoryForm from "../../components/forms/CategoryForm";
import Modal from "../../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryList } from "../../redux/slices/categorySlice";
import Categories from "../../components/Categories";
import { viewCategories } from "../../redux/actions/categoryAction";

const ADCategories = () => {
  const categoryList = useSelector(selectCategoryList);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(viewCategories());
  }, [dispatch]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative h-screen overflow-scroll p-4">
      <Categories />
      <button
        onClick={handleOpenModal}
        className="absolute z-10 right-4 bottom-8 bg-purple-600 text-white p-2 rounded"
      >
        Create New Category
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        element={<CategoryForm onClose={handleCloseModal} />}
      />
    </div>
  );
};

export default ADCategories;
