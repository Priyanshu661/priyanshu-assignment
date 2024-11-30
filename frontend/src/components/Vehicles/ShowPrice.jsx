import React from "react";
import CustomModal from "../UI/CustomModal";
import { VehicleServices } from "../../services/vehicles";

const ShowPrice = ({
  data,
  totalPrice,
  open,
  setOpen,
  vehicleId,
  vehicleData,
  run,
  setRun,
}) => {
  const handlePay = async () => {
    try {
      const vehicles = await VehicleServices.updateVehicle(vehicleId);
      setRun(!run);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <CustomModal
        title={"Total Price"}
        open={open}
        handleClose={handleClose}
        action={handlePay}
        disabled={vehicleData?.isPaid}
        actionButtonText={vehicleData?.isPaid ? "Paid" : "Mark As Paid"}
      >
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2 border-b py-4 border-gray-700">
            {data?.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span>{item?.componentName}</span>
                <span>{item?.price}</span>
              </div>
            ))}
          </div>
          <span>Amount To Pay: {totalPrice} </span>
        </div>
      </CustomModal>
    </div>
  );
};

export default ShowPrice;
