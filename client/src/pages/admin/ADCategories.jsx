import React, { useEffect, useState } from "react";
import CategoryForm from "../../components/category/CategoryForm";
import Modal from "../../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryList } from "../../redux/slices/categorySlice";
import Categories from "../../components/category/Categories";
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
    <div className="relative w-auto font-poppins">
      <div className="flex flex-col flex-grow  overflow-y-scroll">
        <Categories />
      </div>
      <button
        onClick={handleOpenModal}
        className="absolute z-10 right-10 ring-2 ring-offset-2 ring-[#906766] bottom-20 hover:bg-[#906766] text-white font-semibold p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform bg-[#8d7e73] hover:scale-105 active:scale-95"
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
