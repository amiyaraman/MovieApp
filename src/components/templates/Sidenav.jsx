import React from "react";
import "remixicon/fonts/remixicon.css"; {/* This is for icons */}
import { Link } from "react-router-dom";


const Sidenav=() => {


    return (
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <i className="text-[#6556CD] ri-tv-fill text-2xl mr-3"></i>
        <span className="text-2xl text-white font-bold">CCDB</span>
        <nav className="flex flex-col text-zinc-400 text-xl gap-2">
          <h1 className="text-white text-xl font-semibold mt-10 mb-5">
            New Feeds
          </h1>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-fire-fill mr-2"></i> Trending
          </Link>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-bard-fill mr-2"></i> Popular
          </Link>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-movie-2-fill mr-2"></i> Movies
          </Link>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-tv-2-fill mr-2"></i> Series
          </Link>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-group-fill mr-2"></i> People
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400 mt-2" />
        <nav className="flex flex-col text-zinc-400 text-xl gap-2">
          <h1 className="text-white text-xl font-semibold mt-10 mb-5">
            Website Information
          </h1>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-information-fill mr-2"></i> About Us
          </Link>
          <Link className="p-3 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300">
            <i className="ri-customer-service-2-fill mr-2"></i> Contact Us
          </Link>
        </nav>
      </div>
    );
};

export default Sidenav;