import React from "react";
import "./Video.css";
import VideoLive from "./VideoLive";
import { Link, useNavigate } from "react-router-dom";

const Video = ({ data }) => {
  const navigate = useNavigate();
  const handleViewNow = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="video">
      <div className="text-center video_livestream">
        {/* <img className='imgbongdabtn' src={btnbongda} width='100%' alt="" /> */}
        <div className="video_stream ">
          <div className="video_match_live ">
            {data &&
              (console.log("ádfasdfasdfasdf", data),
              (
                <>
                  <VideoLive data={data}></VideoLive>
                </>
              ))}
          </div>
          <button
            className="MV-button"
            onClick={() => handleViewNow(data[1]._id)}
          >
            {" "}
            VÀO PHÒNG LIVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
