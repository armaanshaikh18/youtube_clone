import React from "react";
import VideoContainer from "../components/VideoContainer";
import FilterList from "../components/FilterList";

const MainContainer = () => {
  return (
    <div className="p-5">
      <FilterList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
