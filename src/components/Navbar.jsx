import NavBarItem from "./NavBarItem";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex p-4 px-6 lg:text-lg justify-center gap-6">
        <Button className=" bg-cyan-700 translate-y-[14px] w-[100px] h-[40px] rounded-md z-40 blur-[0.1px] hover:bg-cyan-800"><NavBarItem title="Trending" param="trending"/></Button>
        <Button className=" bg-cyan-700 translate-y-[14px] w-[100px] h-[40px] rounded-md z-40 blur-[0.1px]  hover:bg-cyan-800">  <NavBarItem title="Top Rated" param="rated"/></Button>

    </div>
  )
}

export default Navbar
