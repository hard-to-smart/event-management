import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryList } from "../../redux/slices/categorySlice";
import CategoryCard from "./CategoryCard";
import { viewCategories } from "../../redux/actions/categoryAction";
import { useNavigate } from "react-router-dom";
import nodata from '../../assets/nodata.png'

const Categories = () => {
  const categoryList = useSelector(selectCategoryList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewCategories());
  }, [dispatch]);

  const handleSingleCategory = (title, id) => {
    console.log('clicked');
    navigate(`${id}`)
  };

  return (
    <div className="h-screen overflow-scroll p-4">
      <div className="flex flex-wrap gap-4 justify-around">
        {categoryList.categories && categoryList.categories.length > 0 ? (
          categoryList.categories.map((singleCategory) => (
            <CategoryCard 
              key={singleCategory.id} 
              {...singleCategory} 
              handleCardClick={handleSingleCategory} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center">
            <img src={nodata} alt="No data" className="w-64 h-64 opacity-60" />
            <p className="text-xl text-gray-600 mt-4">No categories available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
