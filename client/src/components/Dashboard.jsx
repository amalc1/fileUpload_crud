import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./Main";
import SideNav from "./SideNav";

const Dashboard = ({ uploadFiles }) => {
  return (
    <>
      <div className="h-screen w-full bg-slate-100 flex">
        <SideNav />
        {uploadFiles && <Main />}
      </div>
    </>
  );
};

export default Dashboard;
