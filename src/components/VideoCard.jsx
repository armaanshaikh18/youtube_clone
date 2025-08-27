import React from "react";

const VideoCard = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-90 shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdHoc = ({ video }) => {
  <div className="p-1 m-1 border border-red-800">
    <VideoCard videos={video} />
  </div>;
};

export default VideoCard;
