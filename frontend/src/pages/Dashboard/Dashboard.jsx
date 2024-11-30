import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { VehicleServices } from "../../services/vehicles";

const Dashboard = () => {
  const [revenueData, setRevenueData] = useState({
    daily: [],
    monthly: [],
    yearly: [],
  });

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const data = await VehicleServices.fetchRevenueData();
        setRevenueData(data);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };
    fetchRevenue();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl">Revenues</h1>

      <h2 className="pt-6">Daily Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData.daily}>
          <Line type="monotone" dataKey="total_revenue" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

      <h2>Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData.monthly}>
          <Line type="monotone" dataKey="total_revenue" stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

      <h2>Yearly Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData.yearly}>
          <Line type="monotone" dataKey="total_revenue" stroke="#ff7300" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
