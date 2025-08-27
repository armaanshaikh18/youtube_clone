import React from "react";

const Comments = ({ comments }) => {
  return (
    <div className="p-5 m-2">
      <>
        <div className="flex p-5 m-2 bg-gray-300 rounded-3xl ">
          <img
            className="h-8 cursor-pointer"
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s"
          />
          <div className="flex flex-col pl-2">
            <p>{comments.name}</p>
            <p>{comments.text}</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Comments;
