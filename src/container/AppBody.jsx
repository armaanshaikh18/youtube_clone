import React from "react";
import SideBar from "../components/SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router";

const AppBody = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default AppBody;
