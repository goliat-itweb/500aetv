import React from "react";
import "./CommunityPc.css";
import innesta from "../../../assets/image/daisu.png";
import logoImage from "../../../assets/image/comu-logo.png";
import bginnesta from "../../../assets/image/bginnesta.png";
import title_decor from "../../../assets/image/decor-title.png";
import img1 from "../../../assets/image/comu-img-right1.png";
import img2 from "../../../assets/image/comu-img-right2.png";
import img3 from "../../../assets/image/comu-img-right3.png";
import img4 from "../../../assets/image/comu-img-right4.png";

const CommunityPc = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="comunityPc-container">
        <div
          className="text-center main_text_community_Pc"
          style={{ marginBottom: "15px" }}
        >
          <h1>
            CỘNG ĐỒNG <span>ĐAM MÊ</span>
          </h1>
        </div>
        <div
          className="d-flex justify-content-between align-items-end "
          style={{ width: "91%" }}
        >
          <div className="left-section-container">
            <div className="info-box">
              <div className="logo text-center">
                <img src={logoImage} alt="500AE Logo" className="logo-image" />
              </div>
              <div className="text-block">
                <p>
                  <span style={{ color: "#FC8B00", fontWeight: "bold" }}>
                    500AE
                  </span>{" "}
                  là một cộng đồng đam mê bóng đá, nơi những người hâm mộ môn
                  thể thao vua có thể kết nối và chia sẻ niềm yêu thích của
                  mình. Với hàng ngàn thành viên, 500AE không chỉ là nơi để trao
                  đổi về các trận đấu, mà còn là một không gian để thảo luận sâu
                  về các chiến thuật, cầu thủ, và đội bóng. Từ những trận đấu
                  hấp dẫn của các giải đấu lớn như Ngoại hạng Anh, La Liga ...
                  đến các giải quốc nội Việt Nam, người hâm mộ luôn tìm thấy
                  những thông tin và phân tích chuyên sâu, đa chiều từ các thành
                  viên giàu kinh nghiệm. <br /> <br /> Ngoài ra, trang 500AE còn
                  cung cấp dịch vụ trực tiếp bóng đá, mang đến những trận cầu
                  đỉnh cao theo thời gian thực với chất lượng tốt nhất. Người
                  xem có thể theo dõi diễn biến từng phút, cập nhật nhanh chóng
                  kết quả và các sự kiện nổi bật trên sân. Tính năng bình luận
                  trực tiếp cũng giúp người hâm mộ không bỏ lỡ cơ hội bàn luận
                  và chia sẻ cảm xúc cùng cộng đồng. Đây thực sự là địa chỉ lý
                  tưởng cho những ai yêu bóng đá và muốn hòa mình vào không khí
                  cuồng nhiệt của từng trận đấu.
                </p>
              </div>
            </div>

            <div className="image-container">
              <img
                src={innesta}
                alt="Innesta holding a phone"
                className="popping-image"
              />
            </div>
            {/* <div>
                    <img src={bginnesta} alt="" className='bginnesta' />
                    <img src={logoImage} alt="" className='imagelogo_innesta' />
                    </div> */}
          </div>
          <div className="comu-right d-flex justify-content-center ">
            <div className="community_one_Pc ">
              <a
                href="https://t.me/TIP500AE"
                className="text-decoration-none text-light"
              >
                <div className="community_box_one_Pc">
                  <img src={img1} alt="" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/500AESHBET/"
                className="text-decoration-none text-light"
              >
                <div className="community_box_two_Pc">
                  <img src={img3} alt="" />
                </div>
              </a>
            </div>
            <div className="community_two_Pc">
              <a
                href=" https://urlvn.net/dudoannhancd57k"
                className="text-decoration-none text-light"
              >
                <div className="community_box_three_Pc">
                  <img src={img2} alt="" />
                </div>
              </a>
              <a
                href=" https://urlvn.net/dudoannhancd57k"
                className="text-decoration-none text-light"
              >
                <div className="community_box_four_Pc">
                  <img src={img4} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPc;
