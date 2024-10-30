import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import footballvideo from "../../../../assets/video/football.mp4";
import speaker from "../../../../assets/image/speaker.webp";
import Topnhacai from "../../../live/othermatch/Topnhacai";
import Infomatch from "../../../live/infomatch/Infomatch";
import useStore from "../../../store/useStore";
import "./VideoPartner.css";
import PartnerLivePc from "../../../hompagePc/partnerlive/PartnerLivePc";
const jwtToken = localStorage.getItem("accessToken");

const VideoPartnerLive = () => {
  const videoList = useStore((state) => state.videoList);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const path = window.location.pathname;
  const matchId = path.split("/").pop();
  const [data, setData] = useState(null);
  const [extraData, setExtraData] = useState(null); // State for second API data
  const [error, setError] = useState(null);

  // Filter video from the store based on matchId
  const filteredVideo = videoList.length
    ? videoList.filter((video) => video.matchId === matchId)
    : [];
  const m3u8Url = filteredVideo.length ? filteredVideo[0].m3u8 : null;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle video interaction (e.g., play on click)
  const handleUserInteraction = () => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.play(); // Start playing
      setIsPlaying(true); // Update the playing state
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (m3u8Url && video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.muted = true; // Mute the video for autoplay
          video.play().catch(() => {});
        });

        return () => hls.destroy(); // Cleanup on unmount
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = m3u8Url;
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.src = footballvideo; // Fallback to MP4 video
        video.muted = true;
        video.play().catch(() => {});
      }
    }
  }, [m3u8Url]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/rooms/partnerlive`;
    try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(
          "CHƯA CÓ TRẬN ĐẤU NÀO CỦA KÊNH NHÀ ĐÀI" + response.statusText
        );
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const fetchExtraData = async () => {
    try {
      const response = await fetch("https://spapi.zetcdn.site/livedata.json");
      if (!response.ok) {
        throw new Error("Error fetching extra data: " + response.statusText);
      }
      const extraData = await response.json();
      setExtraData(extraData);
    } catch (error) {
      console.error("Problem with extra data fetch:", error);
    }
  };
  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  useEffect(() => {
    fetchData();
    fetchExtraData();
  }, []);

  if (error) {
    return <div className="text-center">{error}</div>;
  }
  return (
    <div
      className=""
      style={{
        backgroundColor: "rgb(13 42 123 / 49%)",
        backgroundImage: "url(../../../../assets/image/backgroundlive.webp)",
      }}
    >
      <div className="pt-2 container">
        <img src={speaker} alt="" width="100%" />

        <div className="videopartner text-center">
          <div className="videopartner1 d-flex justify-content-between align-items-start mt-2 pb-5">
            <div className="video_match_live">
              <video
                ref={videoRef}
                controls
                width="100%"
                height="100%"
                onClick={handleUserInteraction}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mx-1 iframe_video">
              <div className="text-center kenh_chat">
                <p>KÊNH CHAT</p>
              </div>
              <iframe
                src={`${process.env.REACT_APP_API_URL}/66e2d08c51acae5963c0cdd9?token=${jwtToken}`}
                title="Live Stream"
                style={{ width: "100%", height: "465px" }}
              ></iframe>
            </div>
          </div>
        </div>
        {!isMobile && extraData && (
          <>
            <Infomatch dataLive={extraData} />
            <Topnhacai />
            <PartnerLivePc />
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPartnerLive;
