import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import footballvideo from "../../../../assets/video/football.mp4";
import speaker from "../../../../assets/image/speaker.png";
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
    <div className="live_main d-flex justify-content-center align-items-center">
      <div className="main_live" style={{ width: "1540px" }}>
        <div className="main_live_padding">
          {!isMobile && (
            <div className="livestream-notification">
              <img src={speaker} alt="" />
              <div className="ln-text">
                <marquee>
                  🔥
                  <span style={{ color: "#ff0e0e", fontWeight: "600" }}>
                    HOT !
                  </span>
                  🔥 Siêu bão KM từ{" "}
                  <span style={{ color: "#fc8b00", fontWeight: "bolder" }}>
                    500AE TV 
                  </span>{" "}
                  : Đăng ký tài khoản tặng{" "}
                  <span style={{ color: "#fc8b00", fontWeight: "bolder" }}>
                    57K
                  </span>
                  🎁 Thể Thao nạp đầu tặng{" "}
                  <span style={{ color: "#fc8b00", fontWeight: "bolder" }}>
                    8.888K
                  </span>{" "}
                  👉 CƯỢC CÀNG NHIỀU NHẬN THƯỞNG CÀNG CAO .☎️ Liên hệ ngay:{" "}
                  <span style={{ color: "#29e58a", fontWeight: "bolder" }}>
                    @TIP500AE
                  </span>{" "}
                  ☎️{" "}
                  <span style={{ color: "#29e58a", fontWeight: "bolder" }}>
                    0785.66.9999
                  </span>{" "}
                  để nhận những phần quà hấp dẫn!🎁🎁🎁
                </marquee>
              </div>
            </div>
          )}
        </div>

        <div className="videopartner text-center">
          <div className="videopartner1 d-flex justify-content-between align-items-start mt-2 pb-5">
            <div className="video_match_live">
                <video
                  ref={videoRef}
                  controls
                  width="100%"
                  height="100%"
                  onClick={handleUserInteraction}
                />
            
            </div>
            <div className="iframe_video">
              {!isMobile && (
                <div className="text-center kenh_chat">
                  <p className="m-0">KÊNH CHAT</p>
                </div>
              )}
              {isMobile ? (
                <iframe
                className=""
                  // src={`${process.env.REACT_APP_API_URL}/${roomId}?token=${jwtToken}`}
                  src="https://trxshbet.online"
                  title="Live Stream"
                  style={{
                    width: "100%",
                    height: "340px",
                    borderRadius: "5px",
                    allowtransparency: "yes",
                    allow: "autoplay",
                    frameborder: "0",
                    marginheight: "0",
                    marginwidth: "0",
                    scrolling: "auto",
                  }}
                ></iframe>
              ) : (
                <iframe
                  className=""
                  // src={`${process.env.REACT_APP_API_URL2}/${roomId}?token=${jwtToken}`}
                  src="https://trxshbet.online"
                  title="Live Stream"
                  style={{
                    width: "100%",
                    height: "568px",
                    borderRadius: "5px",
                    allowtransparency: "yes",
                    allow: "autoplay",
                    frameborder: "0",
                    marginheight: "0",
                    marginwidth: "0",
                    scrolling: "auto",
                  }}
                ></iframe>
              )}
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
