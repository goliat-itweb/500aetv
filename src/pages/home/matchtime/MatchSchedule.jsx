import React, { useState } from "react";
import "./MatchSchedule.css";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../../assets/image/arrow.webp";
import dot from "../../../assets/image/dot.webp";
import trandauhot from "../../../assets/image/trandauhot.webp";
import liveSymbol from "../../../assets/image/living.webp";

const MatchSchedule = ({ data }) => {
  const [visibleMatches, setVisibleMatches] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setVisibleMatches(filteredData.length);
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setVisibleMatches(2);
    setIsExpanded(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const navigate = useNavigate();

  const handleViewNow = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };
  const filteredData = data.filter((match) => match.name !== "BLV Giang A Cay");
  return (
    <div>
      <div className="MS_title">
        <svg
          width="100%"
          height="32"
          viewBox="0 0 411 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256.655 0H155.349C152.968 0 150.823 1.31728 149.937 3.33307L143 19H269L262.068 3.33307C261.177 1.32108 259.032 0 256.655 0Z"
            fill="#FC8B00"
          />
          <path
            d="M1.78516 31.1418V21.8328C1.78516 20.4502 2.906 19.3293 4.28864 19.3293H407.349C408.731 19.3293 409.852 20.4502 409.852 21.8328V31.1418"
            stroke="#FC8B00"
            stroke-width="1.66899"
          />
          <text
            id="dynamic-text"
            x="155"
            y="15"
            font-family="Arial"
            font-size="12"
            font-weight="700"
            fill="white"
          >
            TRẬN ĐẤU KHÁC
          </text>
        </svg>
      </div>
      <div className="matchSchedule">
        {filteredData.slice(0, visibleMatches).map((match, index) => (
          <Link
            to={`/rooms/${match._id}`}
            style={{ textDecoration: "none", color: "white" }}
            key={index}
          >
            <div
              className="match_schedule"
              key={index}
            >
              <div className="ms-first-row">
                <div className="ms-description">
                  <p>{match.description}</p>
                </div>
                {/* <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                  >
                    <path
                      d="M9.51021 10.9778C7.09279 10.9797 4.96936 10.1152 3.04348 8.67853C1.90826 7.83133 0.933151 6.81678 0.0886458 5.67028C0.0184265 5.57514 -0.0508566 5.50295 0.0525999 5.36334C1.67841 3.17456 3.67685 1.48063 6.24407 0.57653C9.01961 -0.401199 11.7104 -0.113378 14.2964 1.27313C16.1445 2.26377 17.6547 3.65745 18.9032 5.35665C18.9753 5.45466 18.9847 5.52255 18.9084 5.62439C17.092 8.06417 14.8342 9.86328 11.893 10.6703C11.1136 10.8845 10.3163 10.9734 9.50974 10.9778H9.51021ZM9.47838 1.9487C7.5422 1.95778 6.00533 3.53601 6.01001 5.51012C6.01469 7.46653 7.56935 9.04572 9.48446 9.03998C11.4286 9.03377 12.9594 7.45219 12.9528 5.45609C12.9463 3.52119 11.3799 1.94009 9.47791 1.9487H9.47838ZM1.41064 5.4953C2.84312 7.23417 4.55272 8.51645 6.66586 9.2121C5.5386 8.24154 4.9174 7.01616 4.91131 5.51012C4.90523 3.99356 5.52924 2.76148 6.6579 1.77945C4.54992 2.47462 2.84359 3.7526 1.41017 5.49482L1.41064 5.4953ZM17.5456 5.50534C16.3402 3.89077 13.4668 1.86407 12.3138 1.80048C14.662 3.72869 14.6123 7.36231 12.3073 9.21497C14.4134 8.51646 16.1207 7.2313 17.5456 5.50534ZM8.36938 7.0697C9.13524 7.6224 10.1515 7.54303 10.8144 6.87942C11.4632 6.22967 11.5686 5.20604 11.0667 4.42625C10.6576 3.79037 9.77096 3.38971 9.25134 3.6063C9.44982 4.20202 9.36743 4.60171 8.98497 4.89527C8.62264 5.17353 8.20179 5.14771 7.72009 4.80921C7.38397 5.58088 7.6714 6.56626 8.36938 7.0697Z"
                      fill="#FFA600"
                    />
                  </svg>
                  <p style={{ color: "#FFA600" }}>
                    {Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000}
                  </p>
                </div> */}
                <div className="living-group">
                  <img src={liveSymbol} alt="" />
                  <span>LIVE</span>
                </div>
              </div>
              <div className="match_name">
                <div className="match_team_one ">
                  <div className="text-center">
                    <div>
                      <img
                        src={match.homeLogo}
                        width="45px"
                        height="45px"
                        alt={`${match.homeTeam} logo`}
                      />
                    </div>
                    <p>{truncateText(match.homeTeam, 8)}</p>
                  </div>
                </div>
                <h2 className="mx-3 vs">Vs</h2>
                <div className="match_team_two">
                  <div className="text-center">
                    <div>
                      <img
                        src={match.awayLogo}
                        width="45px"
                        height="45px"
                        alt={`${match.awayTeam} logo`}
                        className=""
                      />
                    </div>
                    <p> {truncateText(match.awayTeam, 5)}</p>
                  </div>
                </div>
              </div>
              <div className="match_time">
                {/* <div className="match_time_schedule">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={dot} alt="" width="" />
                    <h6 className="m-0 mx-1">
                      {match.time} - {match.date.substring(5)}
                    </h6>
                  </div>
                </div> */}
                <button onClick={() => handleViewNow(match._id)}>
                  XEM NGAY
                  <i className="fa-regular fa-circle-play ms-1"></i>
                </button>
                <button onClick={() => handleViewNow(match._id)}>
                  BLV: {match.name}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="match_see_more">
        {!isExpanded && visibleMatches < filteredData.length && (
          <div onClick={handleSeeMore}>
            <a href="#/" className="">
              XEM THÊM
            </a>
            <img src={arrow} alt="" />
          </div>
        )}
        {isExpanded && (
          <div onClick={handleCollapse}>
            <a href="#/" className="">
              THU GỌN
            </a>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchSchedule;
