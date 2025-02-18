import React from "react";
import StatCards from "@/components/Dashboard/StatCards";
import UserActivity from "@/components/Dashboard/UserActivity";
import Featured from "@/components/Dashboard/Featured";
import MonthlySales from "@/components/Dashboard/MonthlySales";
import SalesbyCountry from "@/components/Dashboard/SalesbyCountry";
import RefundChart from "@/components/Dashboard/RefundChart";

const Dashboard = () => {
  return (
    <div className="">
      <div className="px-4 grid gap-3 grid-cols-12">
        <StatCards />
        <UserActivity />
        {/* <Featured /> */}
        <RefundChart/>
        <MonthlySales />
        <SalesbyCountry />
      </div>
    </div>
  );
};

export default Dashboard;
