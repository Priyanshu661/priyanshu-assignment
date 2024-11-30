import React, { useEffect, useState } from "react";
import Vehicle from "../../components/Vehicles/Vehicle";
import CustomButton from "../../components/UI/CustomButton";
import AddVehicle from "../../components/Vehicles/AddVehicle";
import { VehicleServices } from "../../services/vehicles";

const Vehicles = () => {
  // const data = [
  //   {
  //     id: 1,
  //     vehicleName: "Demo 1",
  //     vehicleType: "Bus",
  //     ownerName: "owner 1",
  //   },
  //   {
  //     id: 2,
  //     vehicleName: "Demo 2",
  //     vehicleType: "Car",
  //     ownerName: "owner 2",
  //   },
  //   {
  //     id: 3,
  //     vehicleName: "Demo 3",
  //     vehicleType: "Truck",
  //     ownerName: "owner 3",
  //   },
  // ];

  const [data,setData]=useState([])
  const [open, setOpen] = useState(false);
  const [run, setRun] = useState(false);


  useEffect(()=>{
    const fetchVehicles = async () => {
      try {
        const vehicles = await VehicleServices.fetchAllVehicles();
        setData(vehicles);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    fetchVehicles();
  },[run])


  return (

    <div className="flex flex-col gap-6">
    <h1 className="text-3xl text-center pt-4">Vehicles</h1>
    <div className="px-6 pt-6 flex flex-col gap-4">
      <CustomButton className="self-end" onClick={() => setOpen(true)}>
        Add Vehicle
      </CustomButton>
      <div className="grid md:grid-cols-3 gap-4 ">
        {data?.map((item, index) => (
          <Vehicle data={item} key={index} />
        ))}
      </div>

      {open && <AddVehicle  setRun={setRun}
          run={run} open={open} setOpen={setOpen} />}
    </div>

    </div>
  );
};

export default Vehicles;
