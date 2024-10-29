import React from "react";
import "./BannerPc.css"; // Import the CSS file for styles

const BannerPc = () => {
  return (
    <div className="banner">
      <div className="image-container">
        <img src="your-image-path.jpg" alt="person" />
      </div>
      <div className="text-container">
        <button className="cta-button">Tham gia cược</button>
        <h1>Thỏa Đam Mê</h1>
      </div>
    </div>
  );
};

export default BannerPc;
