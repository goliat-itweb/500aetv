import React from "react";
import "./Banner.css";
import thamgiacuoc from "../../../assets/image/thamgiacuocngay.webp";
import thoadamme from "../../../assets/image/thoadamme.webp";
import person from "../../../assets/image/personcuoc.webp";
import banner from "../../../assets/image/background-banner.png";
export default function Banner() {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div
        className="banner_cuocngay d-flex justify-content-around"
        style={{ width: "1500px" }}
      >
        <img src={banner} alt="" width="100%" className="banner"/>
        <img src={thamgiacuoc} alt="" className="thamgiacuoc" />
        <img src={thoadamme} alt="" className="thoadamme"  />
      </div>
    </div>
  );
}
