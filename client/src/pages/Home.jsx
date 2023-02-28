import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative overflow-y-hidden">
        <Navbar />
        <Dashboard uploadFiles="true" />
      </div>
    </>
  );
};

export default Home;
