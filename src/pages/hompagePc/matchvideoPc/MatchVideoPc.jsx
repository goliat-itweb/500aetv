import React, { useEffect, useState } from "react";
import "./MatchVideoPc.css";
import "../matchPc/MatchPc.css";
import VideoPc from "../VideoPc/VideoPc";
import MatchSchedulePc from "../matchtimePc/MatchSchedulePc";
import footballmp4 from "../../../assets/video/football.mp4";
import avatarBLV from "../../../assets/image/image.webp";
import PartnerLiveAtTopPc from "../partnerlive/PartnerLiveAtTopPc";
import LogoTeam1 from "../../../assets/image/mulogo.webp";
import LogoTeam2 from "../../../assets/image/chelsealogo.webp";
import { Link, useNavigate } from "react-router-dom";

const videoOriginal = [{ cdnlink: "" }, { cdnlink: footballmp4 }];
const dataSlide = 2;

const MatchVideoPc = ({ data }) => {
  const navigate = useNavigate();

  const handleViewNow = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  if (data) {
    if (data.length > 0) {
      return (
        <div className="MV_Pc d-flex justify-content-between align-items-start mx-1">
          {data &&
            (console.log(data),
            (
              <>
                <div style={{ width: "41.5%" }}>
                  <div className="MV_text_Pc">
                    <p>
                      CẬP NHẬT
                      <br />
                      <span>TRẬN THI ĐẤU HOT</span>
                    </p>
                  </div>
                  <MatchSchedulePc data={data}></MatchSchedulePc>
                </div>
                <div className="MV-rightSide mt-4" style={{ width: "57.5%" }}>
                  <div className="MV-header-title">
                    <div className="MV-header-content">
                      <div className="MV-header-team">
                        <div className="MV-team1">
                          <div className="MV-team-name">
                            <span>{data[1].homeTeam}</span>
                          </div>
                          <div className="MV-team-logo">
                            <img src={data[1].homeLogo} alt="" />
                          </div>
                        </div>
                        <div className="MV-team-svg">
                          <svg
                            width="230"
                            height="92"
                            viewBox="180 -6 255 82"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M197.343 0.00305469C197.696 -0.000976385 198.058 -0.00105986 198.43 0.00305469H197.343ZM392.775 0.00305469V0.00305176H232.225V0.00305469H198.43C209.514 0.125629 228.928 3.97386 232.225 18.1685V58.1085C232.225 71.3034 242.921 81.9999 256.116 81.9999H368.884C382.079 81.9999 392.775 71.3034 392.775 58.1085V16.5093C397.144 3.67102 415.457 0.120711 426.096 0.00305469H427.183C426.831 -0.000976385 426.468 -0.00105986 426.096 0.00305469H392.775Z"
                              fill="#02227C"
                            />
                            <text
                              x="312.5"
                              y="50"
                              font-size="40"
                              font-weight="700"
                              text-anchor="middle"
                              fill="white"
                            >
                              0 : 1
                            </text>
                          </svg>
                        </div>
                        <div className="MV-team2">
                          <div className="MV-team-logo">
                            <img src={data[1].awayLogo} alt="" />
                          </div>
                          <div className="MV-team-name">
                            <span>{data[1].awayTeam}</span>
                          </div>
                        </div>
                      </div>
                      <div className="MV-header-BLV">
                        <div className="MV-blv-avatar">
                          <img className="avatarBLV" src={avatarBLV} alt="" />
                        </div>
                        <div className="MV-blv-info">
                          <div className="MV-blv-name">
                            <span>{data[1].name}</span>
                          </div>
                          <div className="MV-blv-items">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="6.63922"
                                cy="6.7005"
                                r="5.98101"
                                fill="#FC8B00"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.23746 3.1119C7.23746 2.78157 6.96969 2.51379 6.63936 2.51379C6.30904 2.51379 6.04126 2.78157 6.04126 3.1119V6.10234H3.05074C2.72042 6.10234 2.45264 6.37012 2.45264 6.70044C2.45264 7.03076 2.72042 7.29854 3.05074 7.29854H6.04126V10.4885C6.04126 10.8188 6.30904 11.0866 6.63936 11.0866C6.96969 11.0866 7.23746 10.8188 7.23746 10.4885V7.29854H10.4273C10.7576 7.29854 11.0254 7.03076 11.0254 6.70044C11.0254 6.37012 10.7576 6.10234 10.4273 6.10234H7.23746V3.1119Z"
                                fill="white"
                              />
                            </svg>
                            <div clasName="MV-follow">Follow</div>
                            <svg
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.29979 6.05242C9.93915 4.74744 9.95318 2.47455 8.65866 1.14002C7.36353 -0.195113 5.25335 -0.2184 3.93196 1.08688C2.57085 2.43126 2.59444 4.75968 4.2526 6.06316C3.23573 6.4892 2.40903 7.14363 1.79312 8.05213C1.1784 8.95913 0.869691 9.96049 0.867004 11.063H1.92359C1.88358 8.87674 3.6758 6.89105 5.98481 6.75252C7.04229 6.68923 8.0087 6.96151 8.85391 7.60131C9.99617 8.46592 10.5655 9.63297 10.6097 11.0586H11.6893C11.5687 8.69313 10.4249 7.04361 8.29979 6.05242ZM6.26396 5.67296C5.03302 5.66907 4.02182 4.65638 4.02451 3.42933C4.02719 2.1969 5.03302 1.19525 6.26873 1.19406C7.50445 1.19286 8.50908 2.19123 8.51565 3.42634C8.52192 4.65698 7.49967 5.67654 6.26396 5.67296Z"
                                fill="#FC8B00"
                              />
                              <path
                                d="M10.9281 5.09819C12.123 4.1461 12.2873 2.58118 11.623 1.46789C10.9531 0.345269 9.70223 -0.0348141 8.85391 0.135959C8.9665 0.386829 9.08413 0.636187 9.19017 0.890583C9.22618 0.977229 9.27203 1.00519 9.36472 1.00972C10.2657 1.0543 11.0546 1.84495 11.1032 2.74591C11.1485 3.58517 10.7004 4.30352 9.92439 4.62668C9.84983 4.65766 9.82691 4.69771 9.82313 4.77428C9.80978 5.04177 9.78812 5.30902 9.77024 5.57626C9.76696 5.62462 9.76571 5.67298 9.76445 5.7027C11.6928 6.16439 12.7316 7.36081 12.8933 9.32067H13.7889C13.6842 7.32857 12.7215 5.93468 10.9281 5.09819Z"
                                fill="#FC8B00"
                              />
                            </svg>
                            <div clasName="MV-watching">
                              {Math.floor(Math.random() * 10000)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MV-video-group">
                    <VideoPc data={data}></VideoPc>
                  <button
                    className="MV-button"
                    onClick={() => handleViewNow(data[1]._id)}
                  >VÀO PHÒNG LIVE</button>
                  </div>
                </div>
              </>
            ))}
        </div>
      );
    } else {
      return (
        <div className="MV_Pc d-flex justify-content-between align-items-start mt-5">
          {data && (
            <>
              <div style={{ width: "42%" }}>
                <div className="MV_text_Pc ">
                  <h3 className="">
                    CẬP NHẬT <span>TRẬN THI ĐẤU HOT</span>
                  </h3>
                  {/* <p>GIẢI ĐẤU VÀ TRẬN ĐẤU SẮP TỚI</p> */}
                </div>
                <PartnerLiveAtTopPc dataSlide={dataSlide}></PartnerLiveAtTopPc>
              </div>
              <div className="" style={{ width: "53.17%" }}>
                <div className="">
                  <button className="btn_leauge_Pc active">Premier</button>
                  <button className="btn_leauge_Pc">LaLiGa</button>
                  <button className="btn_leauge_Pc">Seria</button>
                  <button className="btn_leauge_Pc">Bundesliga</button>
                  <button className="btn_leauge_Pc">League 1</button>
                </div>
                <VideoPc data={videoOriginal}></VideoPc>
              </div>
            </>
          )}
        </div>
      );
    }
  }
};

export default MatchVideoPc;
