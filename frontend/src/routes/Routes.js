import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout/index.jsx";



const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard.jsx'));
const Vehicles = lazy(() => import('../pages/Vehicles/Vehicles.jsx'));
const VehicleDetails = lazy(() => import('../pages/VehicleDetails/VehicleDetails.jsx'));


const Routes = ()=>({
  path: "/",

  element:<Layout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "/vehicles",
      element: <Vehicles />,
    },
    {
      path: "/vehicle/:id",
      element: <VehicleDetails />,
    },
 
  ],
});

export default Routes;
