import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "../../utils/axios";

const Topnav = ()=>{
   const [query, setquery] = useState("");
   const [searches, setsearches] = useState([]);


    const GetSearch = async () => {
      try {

        const {data} = await axios.get(`/search/multi?query=${query}`);
        setsearches(data.results);
       
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      GetSearch();

    },[query]);

 
    return (
      <div className="w-full h-[10vh] relative flex justify-center items-center">
        <i className="ri-search-line text-zinc-400 text-3xl"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          type="text"
          className="w-[50%] mx-10 p-3 text-zinc-400 bg-transparent text-xl outline-none"
          placeholder="Search Anything..."
        />

        <i
          onClick={() => setquery("")}
          className={`ri-close-line text-3xl text-zinc-400 ${
            query.length <= 0 ? "collapse" : "visible"
          } `}
        ></i>

        <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
          {searches.map((search, index) => (
            <Link
              key={index}
              className=" w-full p-5 flex items-center justify-start border-b-2 border-zinc-100 hover:bg-zinc-300"
            >
              <img
                className="h-[10vh] w-[10vh] object-cover mr-5 rounded shadow-lg"
                src={
                  search.poster_path ||
                  search.profile_path ||
                  search.backdrop_path?`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                    search.poster_path ||
                    search.profile_path ||
                    search.backdrop_path
                  }`:
                  "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
                }
                alt=""
              />
              <span className="font-semibold text-zinc-600 hover:text-black">
                {search.name ||
                  search.title ||
                  search.original_title ||
                  search.original_name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Topnav;