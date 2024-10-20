import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../redux/slices/eventSlice";

const FilterPrice = () => { 
    const dispatch = useDispatch();
    const [startRange, setStartRange] = useState(0);
    const [endRange, setEndRange] = useState(50000);

    const handleStartRange = (e) => {
        setStartRange(Number(e.target.value)); 
    };

    const handleEndRange = (e) => {
        setEndRange(Number(e.target.value)); 
    };

    useEffect(() => {
        dispatch(filterByPrice({ min: startRange, max: endRange }));
    }, [startRange, endRange, dispatch]);

    return (
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
                        value={startRange} 
                        onChange={handleStartRange}
                    />
                </div>
                <div className="mx-2 text-lg">-</div>
                <div className="flex items-center w-full">
                    <p>Max</p>
                    <input
                        type="text"
                        className="w-16 mx-2 text-center border-b-4 border-gray-400 focus:outline-none"
                        value={endRange}
                        onChange={handleEndRange}
                    />
                </div>
            </div>
            <div className="relative mt-4">
                <input
                    type="range"
                    className="absolute bg-amber-950 text-blue-500 w-1/2 h-1 top-0 appearance-none z-10 cursor-pointer"
                    min="0"
                    max="25000" 
                    value={startRange}
                    step="100"
                    onChange={handleStartRange}
                />
                <input
                    type="range"
                    className="absolute w-1/2 right-0 bg-amber-950 text-blue-500 h-1 top-0 appearance-none cursor-pointer"
                    min="25000"
                    max="50000"
                    value={endRange}
                    step="100"
                    onChange={handleEndRange}
                />
            </div>
        </div>
    );
};

export default FilterPrice;
