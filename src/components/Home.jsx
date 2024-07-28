import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "../utils/axios";

const Home =()=>{
    document.title="Chalchitr | Home";

    const [wallpaper, setWallpaper] = useState(null);


    const loadWallpaper=async ()=>{
      // Load wallpaper from API
      // Example: axios.get("https://api.example.com/wallpaper").then(response=>setWallpaper(response.data.url));
      try{
        const  data  = await axios.get(`/trending/all/day`);
        console.log(data);
        setWallpaper(data.results)
      }catch(e){
        console.error(e);
        // Handle error here, for example, showing an alert or redirecting to an error page
      }
    };


    useEffect(()=>{
      loadWallpaper();
      // Add your own logic here to load wallpaper when the component mounts or when the wallpaper changes.
      // For example, you could use useEffect with dependency array to only load wallpaper when the wallpaper changes.
      // Example: useEffect(()=>{ loadWallpaper(); }, [wallpaper]);
      // You can also add a check to prevent unnecessary API calls when the wallpaper is already loaded.
      // Example: useEffect(()=>{ if(!wallpaper) loadWallpaper(); }, []);
      // You can also use a debounce function to delay the API call until the user stops typing.
      // Example: const debouncedLoadWallpaper = debounce(loadWallpaper, 500);
      // useEffect(()=>{ debouncedLoadWallpaper(); }, [query]);
      // You can also use a throttle function to limit the number of API calls.
      // Example: const throttledLoadWallpaper = throttle(loadWallpaper,
    },[]);
    return (
      <>
        <Sidenav />{/* this is a customised side navigation bar in-side tamplate folder */}
        <div className="w-[80%] h-full">
          <Topnav />{/* this is a customised top navigation like back etc in-side tamplate folder */}
          <Header data={wallpaper}/>
        </div>
      </>
    );
};

export default Home;