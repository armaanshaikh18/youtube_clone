import React, { useEffect, useState } from "react";
import VideoCard, { AdHoc } from "./VideoCard";
import { YOUTUBE_API } from "../assets/constants";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addListVideos } from "../redux/videoSlice";
import js from "@eslint/js";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store?.cardVideos?.video);

  console.log(videos, "video items");

  const handleYoutubeApi = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    dispatch(addListVideos(jsonData?.items));
  };

  useEffect(() => {
    handleYoutubeApi();
  }, []);
  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AdHoc video={videos[0]} />} */}
      {videos?.map((video) => (
        <Link
          key={video.id?.videoId || video.id}
          to={"/watch?v=" + (video.id?.videoId || video.id)}
        >
          <VideoCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
