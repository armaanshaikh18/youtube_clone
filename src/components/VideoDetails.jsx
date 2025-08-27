import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sideBarCollapse } from "../redux/toogleSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "../container/CommentContainer";
import LiveContainer from "../container/LiveContainer";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(sideBarCollapse());
  }, []);
  return (
    <div className="p-5 w-full">
      <div className="flex w-full">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-1/3">
          <LiveContainer />
        </div>
      </div>
      <div className="flex flex-col">
        <CommentContainer />
      </div>
    </div>
  );
};

export default VideoDetails;
