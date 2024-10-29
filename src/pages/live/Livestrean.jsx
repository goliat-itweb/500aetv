import React, { useEffect, useState } from "react";
import "./LiveStream.css";
import { useParams } from "react-router-dom";
import VideoLive from "../home/Video/VideoLive";
import Infomatch from "./infomatch/Infomatch";
import speaker from "../../assets/image/speaker.png";
import Topnhacai from "./othermatch/Topnhacai";
import Partnerlivepc2 from "./partnerlivepc2/Partnerlivepc2";

const LiveStream = () => {
  const { roomId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const jwtToken = localStorage.getItem("accessToken");
  const [dataLive, setDataLive] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/list`);
  //       const response = await fetch(`${process.env.REACT_APP_API_URL2}`);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/rooms/${roomId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch room data");
        }

        const message = await response.json();
        console.log("message: ", message);
        if (
          message.message ===
          "Truy Cập Room Thành Công, Có thể Emit để connect room socket"
        ) {
          setData(message.room.cdnlink);
          setDataLive(message.room);
        } else {
          throw new Error("Failed to connect to the live room");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [roomId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <div>Loading...Livestream</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="live_main d-flex justify-content-center align-items-center">
      <div className="main_live" style={{ width: "1540px" }}>
        <div className="main_live_padding">
          <div className="livestream-notification">
            <img src={speaker} alt="" />
            <div className="ln-text">
              <marquee>
                🔥<span style={{ color: "#ba0000" }}>HOT !</span>🔥 Siêu bão KM
                từ <span style={{ color: "#fc8b00" }}>500AE</span> TV : Đăng ký
                tài khoản tặng <span style={{ color: "#fc8b00" }}>57K</span>
                🎁 Thể Thao nạp đầu tặng{" "}
                <span style={{ color: "#fc8b00" }}>8.888K</span> 👉 CƯỢC CÀNG
                NHIỀU NHẬN THƯỞNG CÀNG CAO .☎️ Liên hệ ngay:{" "}
                <span style={{ color: "#03aa00" }}>@TIP50AE</span> ☎️{" "}
                <span style={{ color: "#03aa00" }}>0785.66.9999</span> để nhận
                những phần quà hấp dẫn!🎁🎁🎁
              </marquee>
            </div>
          </div>
          <div className="live_video">
            <div className="d-flex justify-content-between align-items-start main_video_live">
              <div className="video_match_live">
                {data && <VideoLive data={data} />}
              </div>
              <div className="iframe_video">
                {!isMobile && (
                  <div className="text-center py-1 kenh_chat">
                    <p className="m-0">KÊNH CHAT</p>
                  </div>
                )}
                {isMobile ? (
                  <iframe
                    className="mt-1"
                    // src={`${process.env.REACT_APP_API_URL2}/${roomId}?token=${jwtToken}`}
                    src="https://trxshbet.online"
                    title="Live Stream"
                    style={{
                      width: "100%",
                      height: "50%",
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
                    className="mt-1"
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

          {!isMobile && (
            <>
              <Infomatch dataLive={dataLive}></Infomatch>
              <Partnerlivepc2></Partnerlivepc2>
              <Topnhacai></Topnhacai>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
