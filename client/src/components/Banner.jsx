import { useState, useEffect } from "react";
import { carouselImages } from "../utils/banner";
import { Link } from "react-router-dom";
import Loading from "./loading/Loading";
import { useIsLoading } from "./loading/LoadingHook";

const Banner = () => {
  // index tracker for current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // 4 second interval duration for banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % carouselImages.length;
      });
    }, 4000);
    // clearing interval on unmount to prevent memory leak
    return () => {
      clearInterval(interval);
    };
  }, []);

  const isLoading = useIsLoading();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="relative w-full min-h-[80vh]  flex items-start">
      {/* Banner container */}
      <div className="w-full h-[80vh]">
        {/* current image */}
        <img
          className="w-full h-full object-fill"
          src={carouselImages[currentIndex].src}
        />
      </div>
      {/* banner text overlay */}
      <div className="absolute w-1/2 text-white  top-8 right-10  flex  flex-col items-end  h-[80vh] ">
        <div className="p-2 flex flex-col items-end ">
          <p className="text-[4rem] tracking-widest">
            {carouselImages[currentIndex].tagline}
          </p>
        </div>
        <div className="p-2  w-28 border-b-2 border-white "></div>
      </div>
      <div className="absolute w-1/2 bottom-28 right-10 flex flex-col items-end ">
        <div className="text-white  p-4 flex flex-col items-end w-full">
          <p className="text-xl uppercase whitespace-nowrap sm:whitespace-normal break-words  max-w-[450px] text-end tracking-widest">
            {carouselImages[currentIndex].description}
          </p>
          <div className="flex justify-center w-1/3 p-4 ">
            <Link
              to="/category"
              className="uppercase bg-white py-3 px-10 text-black hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
