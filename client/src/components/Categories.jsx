import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryList } from "../redux/slices/categorySlice";
import CategoryCard from "../components/CategoryCard";
import { viewCategories } from "../redux/actions/categoryAction";
import { useNavigate } from "react-router-dom";

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
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
