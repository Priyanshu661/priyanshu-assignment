import React from "react";

const VehicleComponent = ({ data }) => {
  return (
    <div className="border border-gray-600 bg-white flex flex-col gap-4 p-4 ">
      {/* <span className="font-semibold text-green-500">
        Vehicle Name: {data?.vehicleName}
      </span> */}
      <span className="font-semibold text-green-500">Component Name: {data?.componentName}</span>
      <span>Issue Type: {data?.issueType}</span>
      <span>Price: {data?.price}</span>
    </div>
  );
};

export default VehicleComponent;
