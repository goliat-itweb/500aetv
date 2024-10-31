import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import footballvideo from "../../../assets/video/football.mp4";
import "./VideoLive.css";

const VideoLive = ({ data }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const m3u8Url = typeof data === "string" ? data : data[1]?.cdnlink;

  const handleUserInteraction = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const setupVideo = () => {
      if (m3u8Url && videoRef.current) {
        if (m3u8Url.endsWith(".mp4")) {
          videoRef.current.src = m3u8Url;
          videoRef.current.muted = false;
          videoRef.current.play().catch(() => {});
        } else if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(m3u8Url);
          hls.attachMedia(videoRef.current);

          hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoRef.current.muted = false; // Mute for autoplay
            videoRef.current.play().catch(() => {});
          });

          return () => {
            hls.destroy();
          };
        } else if (
          videoRef.current.canPlayType("application/vnd.apple.mpegurl")
        ) {
          // Fallback for native HLS support (e.g., in Safari)
          videoRef.current.src = m3u8Url;
          videoRef.current.muted = false;
          videoRef.current.play().catch(() => {});
        } else {
          // If none of the above, fallback to a default MP4 video
          videoRef.current.src = footballvideo;
          videoRef.current.muted = false;
          videoRef.current.play().catch(() => {});
        }
      }
    };

    if (videoRef.current) {
      setupVideo();
    }

    return () => {
      // Cleanup if necessary
    };
  }, [m3u8Url]);

  return (
    <div className="video_main">
      
      <video
        ref={videoRef}
        controls
        width="100%"
        height="628px"
        onClick={handleUserInteraction} // Handles user interaction like clicking to play
        onPlay={() => setIsPlaying(true)} // Track when the video starts playing
        onPause={() => setIsPlaying(false)} // Track when the video is paused
        style={{ backgroundColor: "black" }}
      >
        Your browser does not support the video tag.
      </video>
      {/* {isMobile && (
        <>
          <button className="MV-button">VÀO PHÒNG LIVE</button>
        </>
      )} */}
    </div>
  );
};

export default VideoLive;
