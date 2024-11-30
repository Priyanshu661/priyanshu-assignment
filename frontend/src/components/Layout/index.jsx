import React from "react";
import CustomLayout from "./Layout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen  overflow-hidden flex">
      <div className="w-32 md:w-56  h-full ">
        <CustomLayout />
      </div>

      <div className="w-[calc(100%-128px)]  md:w-[calc(100%-224px)] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
