import React from "react";
import "./StoryPc.css";
import image500ae from "../../../assets/image/500aeImage.webp";
import premireLeague from "../../../assets/image/premierLeague.png";
import laliga from "../../../assets/image/laliga.png";
import bundesliga from "../../../assets/image/bundesliga.png";

const StoryPc = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="d-flex justify-content-center diagonal-section align-items-center"
        style={{ marginTop: "30px", width: "1500px" }}
      >
        <div className="storyPC-container" style={{ padding: "0 10px" }}>
          <div className="story-left">
            <div className="heading-container">
              <h1>Giới thiệu về 500AE live</h1>
            </div>
            <p className='storyPC-content'>
              <span style={{ color: "#FC8B00" }}>500AE Live</span> là chuyên
              trang trực tiếp bóng đá với hàng ngàn giải đấu trong và ngoài nước
              xuyên suốt 24h với chất lượng HD, siêu mượt. Hàng trăm BLV đa
              phong cách và phòng chat xôm tụ đồng hành cùng bạn suốt ngày đêm,
              mang đến những trải nghiệm xem bóng thú vị nhất dành cho người hâm
              mộ túc cầu khắp VN.
              <br />
              <br />
              Tại <span style={{ color: "#FC8B00" }}>500AE Live</span>, bạn
              không chỉ được thưởng thức những trận cầu đỉnh cao, mà còn có cơ
              hội hòa mình vào không khí sôi động cùng những người hâm mộ khác.
              Trang web cung cấp dịch vụ trực tiếp bóng đá với hình ảnh sắc nét,
              âm thanh sống động, giúp bạn không bỏ lỡ bất kỳ khoảnh khắc nào
              trên sân cỏ. Đây là nơi mà mọi người có thể chia sẻ đam mê, bình
              luận và phân tích từng trận đấu, mang đến trải nghiệm bóng đá toàn
              diện nhất... <a>XEM THÊM</a>
            </p>
          </div>
          <div className="story-right">
            <div className="story-grid">
              <img
                src={premireLeague}
                alt="Stadium with Trophy"
                className="image-right"
              />
              <div className="story-row">
                <img
                  src={laliga}
                  alt="Stadium with Trophy"
                  className="image-right"
                />
                <img
                  src={bundesliga}
                  alt="Stadium with Trophy"
                  className="image-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPc;
