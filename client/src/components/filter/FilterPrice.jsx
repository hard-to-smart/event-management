import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByPrice } from "../../utils/functions";
import { filterByPrice } from "../../redux/slices/eventSlice";

const FilterPrice = () => { 
    const dispatch=useDispatch();
    const [startRange, setStartRange] = useState(0)
    const [endRange, setEndRange] = useState(100000)
    const [productFilteredByPrice, setProductFilteredByPrice] = useState([])
    const handleStartRange=(e)=>{
        setStartRange(e.target.value)
    }
    const handleEndRange = (e) =>{
        setEndRange(e.target.value)
    }
    const allEvents = useSelector((store)=> store.event.allEvents);
    useEffect(()=>{
        const temp = sortByPrice( allEvents, startRange, endRange)
        console.log(temp)
        dispatch(filterByPrice(temp));
    }, [startRange, endRange])
  return (
    // SliderComponent.jsx
    <div className="w-fit bg-white">
      <header>
        <h2 className="text-lg font-semibold">Price Range</h2>
      </header>
      <div className="flex my-6 font-semibold text-gray-600">
        <div className="flex items-center justify-center w-full">
          <p>Min</p>
          <input
            type="text"
            className="w-16 mx-2 text-center border-b-4 border-gray-400 focus:outline-none"
            defaultValue="2500"
            value={startRange}
          />
        </div>
        <div className="mx-2 text-lg">-</div>
        <div className="flex items-center w-full ">
          <p>Max</p>
          <input
            type="text"
            className="w-16 mx-2 text-center border-b-4 border-gray-400 focus:outline-none"
            defaultValue="7500"
            value={endRange}
          />
        </div>
      </div>
      <div className="relative mt-4">
        <input
          type="range"
          className="absolute bg-amber-950 text-blue-500 w-1/2 h-1 top-0 appearance-none z-10 cursor-pointer"
          min="0"
          max="10000"
          defaultValue="0"
          step="100"
          onChange={handleStartRange}
        />
        <input
          type="range"
          className="absolute w-1/2 right-0 bg-amber-950 text-blue-500 h-1 top-0 appearance-none cursor-pointer"
          min="10000"
          max="100000"
          defaultValue="100000"
          step="100"
          onChange={handleEndRange}
        />
      </div>
    </div>
  );
};

export default FilterPrice;