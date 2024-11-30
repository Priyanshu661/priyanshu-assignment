import React from "react";
import CustomButton from "../UI/CustomButton";
import { useNavigate } from "react-router-dom";

const Vehicle = ({ data }) => {


  const navigate=useNavigate()
  return (
    <div className="border border-gray-600 bg-white flex flex-col gap-4 p-4 ">
      <span className="font-semibold text-green-500">
        Vehicle Name: {data?.vehicleName}
      </span>
      <span>Vehicle Type: {data?.vehicleType}</span>
      <span>Owner Name: {data?.ownerName}</span>


      <CustomButton variant="contained" onClick={()=>navigate(`/vehicle/${data?.id}`)} >View</CustomButton>
    </div>
  );
};

export default Vehicle;
