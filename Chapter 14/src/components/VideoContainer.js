import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video?.id} className="m-2 hover:bg-gray-100">
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
