import React from "react";
import "./Community.css";
import innesta from "../../../assets/image/innesta.webp";
import mainlogo from "../../../assets/image/mainlogo.webp";
import imginnestaandtext from "../../../assets/image/imginnestaandtext.png";
import comuImg1 from "../../../assets/image/comu-img-right1.png";
import comuImg2 from "../../../assets/image/comu-img-right2.png";
import comuImg3 from "../../../assets/image/comu-img-right3.png";
import comuImg4 from "../../../assets/image/comu-img-right4.png";

const Community = () => {
  return (
    <div className=" px-3">
      <div className="p-1">
        <img width="100%" src={imginnestaandtext} alt="" />
      </div>
      <div className="text-center main_text_community mt-2">
        <h1>
          CỘNG ĐỒNG <span>ĐAM MÊ</span>{" "}
        </h1>
      </div>
      <div className="comunity-container d-flex justify-content-between">
        <div className="community-one ">
          <img src={comuImg1} className="comuImg1"></img>
          <img src={comuImg3} className="comuImg3"></img>
        </div>
        <div className="community-two">
          <img src={comuImg2} className="comuImg2"></img>
          <img src={comuImg4} className="comuImg4"></img>
        </div>
      </div>
    </div>
  );
};

export default Community;
