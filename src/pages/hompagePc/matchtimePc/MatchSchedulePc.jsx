import React, { useState } from "react";
import "./MatchSchedulePc.css";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../../assets/image/arrow.webp";
import dot from "../../../assets/image/dot.webp";
import btnbongda from "../../../assets/image/btnbongda.png";
import liveSymbol from "../../../assets/image/living.webp";

const MatchSchedulePc = ({ data }) => {
  const [visibleMatches, setVisibleMatches] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLive, setIsLive] = useState(true);
  const [visibleLeague, setVisibleLeague] = useState(true);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleSeeMore = () => {
    setVisibleMatches(filteredData.length);
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setVisibleMatches(5);
    setIsExpanded(false);
  };

  const navigate = useNavigate();

  const handleViewNow = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  const sortedData = data.sort((a, b) => (b.hot === "YES") - (a.hot === "YES"));
  const filteredData = sortedData.filter(
    (match) => match.name !== "BLV Giang A Cay"
  );

  return (
    <div className="matchSchedule_Pc">
      {filteredData.slice(0, visibleMatches).map((match, index) => (
        <Link
          to={`/rooms/${match._id}`}
          style={{ textDecoration: "none", color: "white" }}
          key={index}
        >
          <div className="match_schedule_Pc d-flex align-items-center justify-content-around">
            <div className="match_league_Pc">
              {visibleLeague && (
                <div className='league_text'>{match.description}</div>
              )}
              {isLive === true && (
                <div className="match_live_symbol">
                  <img src={liveSymbol} alt="live symbol" />
                  <div className="ms-1">LIVE</div>
                </div>
              )}
            </div>
            <div className="match_name_Pc">
              <div className="match_team_one_Pc">
                <div>
                  <img
                    src={match.homeLogo}
                    width="40px"
                    height="40px"
                    alt={`${match.homeTeam} logo`}
                  />
                </div>
                <p>{truncateText(match.homeTeam, 5)}</p>
              </div>
              <div className="match-middle-content">
                <div className="match-time">
                  {/* {match.time} - {match.date.substring(5)} */}
                  HT
                </div>
                <div className="match-vs">1 - 1</div>
              </div>
              <div className="match_team_two_Pc">
                <div>
                  <img
                    src={match.awayLogo}
                    width="40px"
                    height="40px"
                    alt={`${match.awayTeam} logo`}
                    className=""
                  />
                </div>
                <p>{truncateText(match.awayTeam, 5)}</p>
              </div>
            </div>

            <div className="match_time_Pc_button">
              <button onClick={() => handleViewNow(match._id)}>
                XEM NGAY
                <i className="fa-regular fa-circle-play ms-1"></i>
              </button>
                <button>{match.name}</button>
            </div>
          </div>
        </Link>
      ))}
      <div className="match_see_more_Pc">
        {!isExpanded && visibleMatches < filteredData.length && (
          <div className="MSPC-viewmore" onClick={handleSeeMore}>
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

export default MatchSchedulePc;
