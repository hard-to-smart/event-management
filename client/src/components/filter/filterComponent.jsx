import { GiHamburgerMenu } from "react-icons/gi";
import FilterPrice from "./FilterPrice";
import SearchBar from "./SearchBar";
import SortEvents from "./SortBy";
// import SelectCategory from "./SelectCatgeory";

const FilteringComponent = () => {
  return (
    <div className="min-w-[250px] bg-white  flex-col m-5 mx-2 shadow-2xl hidden md:flex">
      <div className="p-4 flex justify-between items-center">
        <GiHamburgerMenu className="text-xl cursor-pointer" />
        <h2 className="text-xl font-semibold text-black">Filter Products</h2>
      </div>
      <hr className="border-gray-300 mt-2" />
      <div className="divide-y w-full flex flex-col items-center divide-gray-200">
        <SearchBar />
        <FilterPrice />
        {/* <SelectCategory/> */}
        <SortEvents/>
      </div>
    </div>
  );
};

export default FilteringComponent;
