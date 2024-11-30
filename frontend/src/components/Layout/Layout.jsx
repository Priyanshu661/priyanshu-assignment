import React from "react";
import { Link } from "react-router-dom";

const CustomLayout = () => {
  const menuItems = [
    {
      name: "Dashboard",
      to: "/",
    },
    {
      name: "Vehicles",
      to: "/Vehicles",
    },
  ];

  return (
    <div className="flex flex-col gap-4   items-center pt-10  h-full bg-blue-200">

    <span  className="text-xl font-bold text-blue-500" >FYN</span>
      {menuItems?.map((item, index) => (
        <Link className="cursor-pointer hover:bg-blue-400 w-full text-center p-4" key={index} to={item?.to}>
          <span>{item?.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CustomLayout;
