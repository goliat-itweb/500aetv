import React from "react";
import "./Topnhacai.css";
import shbet from "../../../assets/image/1.webp";
import ae500 from "../../../assets/image/2.webp";
import topnhacai from "../../../assets/image/topnhacaiuytin.webp";
export default function Topnhacai() {
  return (
    <div className="topnhacaiuytin">
      <div className="d-flex justify-content-center align-items-center">
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
            x="600"
            y="40"
            font-family="Arial"
            font-size="30"
            font-weight="700"
            fill="white"
          >
            TOP NHÀ CÁI UY TÍN
          </text>
        </svg>
      </div>
      <div className="d-flex justify-content-around align-items-start">
        <div className="listnhacai">
          <div
            className=" d-flex justify-content-around ms-2 align-items-end"
            style={{
              backgroundColor: "#232E44",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <div style={{ width: "35%" }}>
              <img src={shbet} alt="" width="100%" />
            </div>
            <div className="nhaccaiuytin">
              <p className="text_nhacai">Nhà Cái Uy Tín Số 1</p>
              <p className="text_nhacai">Inesta Làm Đại Sứ</p>
              <button className="watch-button2 mt-3">CƯỢC NGAY</button>
              <p></p>
            </div>
          </div>
          <div
            className="  d-flex justify-content-around  ms-2 align-items-end"
            style={{
              backgroundColor: "#232E44",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <div style={{ width: "35%" }}>
              <img src={ae500} alt="" width="100%" />
            </div>
            <div className="nhaccaiuytin">
              <p className="text_nhacai">Nhà Cái Uy Tín Số 1</p>
              <p className="text_nhacai">Inesta Làm Đại Sứ</p>
              <button className="watch-button2  mt-3">CƯỢC NGAY</button>
              <p></p>
            </div>
          </div>
          <div
            className="  d-flex justify-content-around  ms-2 align-items-end"
            style={{
              backgroundColor: "#232E44",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <div style={{ width: "35%" }}>
              <img src={ae500} alt="" width="100%" />
            </div>
            <div className="nhaccaiuytin">
              <p className="text_nhacai">Nhà Cái Uy Tín Số 1</p>
              <p className="text_nhacai">Inesta Làm Đại Sứ</p>
              <button className="watch-button2  mt-3">CƯỢC NGAY</button>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
