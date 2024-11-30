import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import VehicleComponent from "../../components/Vehicles/VehicleComponent";
import AddComponent from "../../components/Vehicles/AddComponent";
import CustomButton from "../../components/UI/CustomButton";
import ShowPrice from "../../components/Vehicles/ShowPrice";
import { VehicleServices } from "../../services/vehicles";

// const data = [
//   {
//     vehicleName: "Demo 1",
//     componentName: "Engine",
//     issueType: "Repair",
//     price: 500,
//   },
//   {
//     vehicleName: "Demo 2",
//     componentName: "Headlight",
//     issueType: "Replace",
//     price: 30,
//   },
//   {
//     vehicleName: "Demo 3",
//     componentName: "Shockers",
//     issueType: "Repair",
//     price: 40,
//   },
// ];

const VehicleDetails = () => {
  const params = useParams();
  const [vehicleId, setVehicleId] = useState(null);

  const [data, setData] = useState([]);
  const [vehicleData, setVehicleData] = useState(null);

  const [run, setRun] = useState(false);

  const fetchVehicles = async () => {
    try {
      const vehicles = await VehicleServices.fetchVehicleComponents(vehicleId);
      setData(vehicles);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchVehicleDetails = async () => {
    try {
      const vehicles = await VehicleServices.fetchVehicleDetails(vehicleId);
      setVehicleData(vehicles);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (vehicleId) {
      fetchVehicles();
      fetchVehicleDetails();
    }
  }, [vehicleId, run]);

  const totalPrice = useMemo(() => {
    return data.reduce((amount, item) => {
      return amount + (Number(item?.price) || 0);
    }, 0);
  }, [data]);

  const [open, setOpen] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  useEffect(() => {
    setVehicleId(params.id);
  }, [params.id]);

  return (

    <div className="flex flex-col gap-6">
    <h1 className="text-3xl text-center pt-4">Vehicles Details</h1>
    <div className="px-6 pt-6 flex flex-col gap-4">
      <div className="flex justify-between">
        <CustomButton
          disabled={data.length === 0}
          className=""
          onClick={() => setShowPrice(true)}
        >
          Show Total Price
        </CustomButton>
        <CustomButton className="" onClick={() => setOpen(true)}>
          Add Component
        </CustomButton>
      </div>

      <div className="grid md:grid-cols-3 gap-4 ">
        {data?.map((item, index) => (
          <VehicleComponent data={item} key={index} />
        ))}
      </div>

      {open && (
        <AddComponent vehicleId={vehicleId} open={open} setOpen={setOpen} setRun={setRun}
          run={run} />
      )}
      {showPrice && (
        <ShowPrice
          totalPrice={totalPrice}
          data={data}
          open={showPrice}
          setOpen={setShowPrice}
          vehicleId={vehicleId}
          vehicleData={vehicleData}
          setRun={setRun}
          run={run}
        />
      )}
    </div>
    </div>
  );
};

export default VehicleDetails;
