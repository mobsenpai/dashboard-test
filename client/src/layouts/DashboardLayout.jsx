import React from "react";
import Header from "../components/primary/Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
