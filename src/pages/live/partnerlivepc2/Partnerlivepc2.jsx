import { React, useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Partnerlivepc2.css";
import KenhNhaDaiPc from "../../../assets/image/kenhnhadaiPc.webp";

const PartnerLivePc2 = (dataSlide) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const setVideoList = useStore((state) => state.setVideoList);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/rooms/partnerlive`;
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(
          "CHƯA CÓ TRẬN ĐẤU NÀO CỦA KÊNH NHÀ ĐÀI" + response.statusText
        );
      }
      const data = await response.json();
      setData(data);
      setVideoList(data);
    } catch (error) {
      setError(error.message);
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  if (data) {
    return (
      <div className="livePC2 d-flex justify-content-center align-items-center">
      
        <svg
          width="1500"
          height="102"
          viewBox="0 0 1500 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M904.184 0H595.829C588.58 0 582.053 3.96017 579.354 10.0203L558.24 57.12H941.76L920.659 10.0203C917.947 3.97158 911.42 0 904.184 0Z"
            fill="#FC8B00"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9558 58.7878C9.56474 58.7878 2.76243 65.6528 2.76243 74.1212V102H0V74.1212C0 64.1131 8.03909 56 17.9558 56H1482.04C1491.96 56 1500 64.1131 1500 74.1212V102H1497.24V74.1212C1497.24 65.6528 1490.44 58.7878 1482.04 58.7878H17.9558Z"
            fill="#FC8B00"
          />
          <text
            id="dynamic-text"
            x="630"
            y="40"
            font-family="Arial"
            font-size="30"
            font-weight="700"
            fill="white"
          >
            TRẬN ĐẤU KHÁC
          </text>
        </svg>
        <div className="responsive-carousel" style={{ width: "1400px" }}>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              1000: {
                slidesPerView: 4,
              },
              0: {
                slidesPerView: 3,
              },
            }}
            className="pb-5"
          >
            {data.map((match) => (
              <SwiperSlide key={match.matchId}>
              <div className="match-card text-center ">                      
                <div className="d-flex justify-content-center align-items-center">
                  <div className="PLPC-match-container teams d-flex justify-content-between align-items-center text-center px-3">
                    <div className="text-center ">
                      <img
                        src={match.localteam_logo}
                        className="imglogo_partnerPc"
                        width="50px"
                        height="50px"
                        alt=""
                      />
                      <p className="m-0">
                        {truncateText(match.localteam_title, 10)}
                      </p>
                    </div>
                    <div className="PLPC-match-info">
                      <p className="PLPC-time m-0">{match.startTime}</p>
                      <p className="PLPC-vs-text m-0">1 - 1</p>
                    </div>
                    <div className="text-center">
                      <img
                        src={match.visitorteam_logo}
                        className="imglogo_partnerPc"
                        width="50px"
                        height="50px"
                        alt=""
                      />
                      <p className="m-0">
                        {truncateText(match.visitorteam_title, 10)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <a
                      className="watch-button text-light text-decoration-none"
                      href={`/videopartner/${match.matchId}`}
                    >
                      Xem ngay{" "}
                      <i className="fa-regular fa-circle-play ms-1"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      className="watch-button text-light text-decoration-none"
                      href={`/videopartner/${match.matchId}`}
                    >
                      BLV: KHÔ BÒ
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <p>...LOADING KÊNH NHÀ ĐÀI</p>
      </div>
    );
  }
};

export default PartnerLivePc2;
