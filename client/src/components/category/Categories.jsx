import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryList } from "../../redux/slices/categorySlice";
import CategoryCard from "./CategoryCard";
import { viewCategories } from "../../redux/actions/categoryAction";
import { useNavigate } from "react-router-dom";
import nodata from '../../assets/nodata.png'
import Loading from "../loading/Loading";
import { useIsLoading } from "../loading/LoadingHook";

const Categories = () => {
  const categoryList = useSelector(selectCategoryList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewCategories());
  }, []);
  const handleSingleCategory = (id) => {
    navigate(`${id}`)
  };
  const isLoading= useIsLoading();

  return isLoading ? (
    <Loading />
  ) :
   (
    <div className="min-h-[80vh]  overflow-y-scroll mb-2 py-4 px-2">
      <div className="flex flex-wrap gap-4 justify-evenly">
        {categoryList && categoryList?.length > 0 ? (
          categoryList.map((singleCategory, index) => (
            <CategoryCard 
              key= {index}
              {...singleCategory} 
              handleCardClick={handleSingleCategory} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center mx-auto">
            <img src={nodata} alt="No data" className="w-64 h-64 opacity-60" />
            <p className="text-xl text-gray-600 mt-4">No categories available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
