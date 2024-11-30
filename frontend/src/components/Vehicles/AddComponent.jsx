import React, { useState } from "react";
import CustomModal from "../UI/CustomModal";
import CustomInput from "../UI/CustomInput";
import { VehicleServices } from "../../services/vehicles";

const AddComponent = ({ open, setOpen, vehicleId, run, setRun  }) => {
  const [details, setDetails] = useState({
    vehicleName: "",
    componentName: "",
    issueType: "",
    price: 0,
  });

  const handleAdd = async () => {
    try {
      const vehicles = await VehicleServices.addVehicleComponent({
        ...details,
        vehicleId,
      });
      setRun(!run);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setDetails({
      vehicleName: "",
      componentName: "",
      issueType: "",
      price: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
          type="text"
          name="vehicleName"
          value={details.vehicleName}
          onChange={handleChange}
          required
        />

        <CustomInput
          label="Component Name"
          type="text"
          name="componentName"
          value={details.componentName}
          onChange={handleChange}
          required
        />

        <div className="input-group">
          <label htmlFor="issueType">Issue Type</label>
          <select
            id="issueType"
            name="issueType"
            value={details.issueType}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select Issue Type</option>
            <option value="Repair">Repair</option>
            <option value="Replace">Replace</option>
          </select>
        </div>

        <CustomInput
          label="Price"
          type="number"
          name="price"
          value={details.price}
          onChange={handleChange}
          required
        />
      </div>
    </CustomModal>
  );
};

export default AddComponent;
