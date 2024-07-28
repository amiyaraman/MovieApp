import React from "react";
import BannerSlideshow from "./BannerSlideShow";

const Header= ({data})=>{
    console.log(data);
    return (
        <div className="w-full h-[50vh]">
            <BannerSlideshow images={data}/>
        </div>
    )
}

export default Header;