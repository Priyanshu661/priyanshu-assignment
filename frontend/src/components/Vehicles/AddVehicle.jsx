import React, { useState } from "react";
import CustomModal from "../UI/CustomModal";
import CustomInput from "../UI/CustomInput";
import { VehicleServices } from "../../services/vehicles";

const AddVehicle = ({ open, setOpen, run, setRun }) => {
  const [details, setDetails] = useState({
    vehicleName: "",
    vehicleType: "",
    ownerName: "",
    isPaid: false,
  });

  const handleAdd = async () => {
    try {
      const vehicles = await VehicleServices.createVehicle(details);
      setRun(!run);
      setOpen(false);
    } catch (error) {console.log(error);}
  };
  const handleClose = () => {
    setOpen(false);
    setDetails({
      vehicleName: "",
      vehicleType: "",
      ownerName: "",
      isPaid: false,
    });
  };

  const handleChange = (name, value) => {
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      action={handleAdd}
      actionButtonText="Add"
    >
      <div className="flex flex-col gap-4">
        <CustomInput
          label="Vehicle Name"
          value={details.vehicleName}
          onChange={(e) => handleChange("vehicleName", e.target.value)}
          placeholder="Enter vehicle name"
        />
        <CustomInput
          label="Vehicle Type"
          value={details.vehicleType}
          onChange={(e) => handleChange("vehicleType", e.target.value)}
          placeholder="Enter vehicle type (e.g., Car, Bike)"
        />
        <CustomInput
          label="Owner Name"
          value={details.ownerName}
          onChange={(e) => handleChange("ownerName", e.target.value)}
          placeholder="Enter owner name"
        />
      </div>
    </CustomModal>
  );
};

export default AddVehicle;
