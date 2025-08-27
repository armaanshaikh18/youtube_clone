import React from "react";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex p-2 m-2 items-center bg-gray-300 rounded-lg">
      <img
        className="h-6 cursor-pointer"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s"
      />
      <span className="font-bold px-2">{name} : </span>
      <span className="font-normal px-1">{message}</span>
    </div>
  );
};

export default LiveMessage;
