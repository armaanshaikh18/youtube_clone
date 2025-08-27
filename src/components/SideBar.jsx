import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.toggle);

  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-2.5 w-44 shadow-lg">
      <p className="text-lg font-extrabold m-2">Your's</p>
      <ul className="font-semibold ">
        <li className="p-2">Home</li>
        <li className="p-2">Shorts</li>
        <li className="p-2">Subscriptions</li>
      </ul>
      <p className="text-lg font-extrabold m-2">Explore</p>
      <ul className="font-semibold ">
        <li className="p-2">Shopping</li>
        <li className="p-2">Music</li>
        <li className="p-2">Movies</li>
        <li className="p-2">Live</li>
        <li className="p-2">Gaming</li>
      </ul>
    </div>
  );
};

export default SideBar;
