import React from "react";
import image from "../../../assets/image/image.webp";
import mainlogo from "../../../assets/image/mainlogo.webp";
import personblv from "../../../assets/image/image.webp";
import "./Infomatch.css";
import infoMatch from "../../../assets/image/title-game.jpg";

export default function Infomatch({ dataLive }) {
  console.log("dataLive: ", dataLive);

  return (
    <div className="d-flex infomatch-container mt-3">
      <div className="infomatch_one">
        <div className="infomatch_title">
          <img src={personblv} alt="" className="infomatch_title_image" />
        </div>
        <div className="infomatch-content-wrapper">
          <div className="infomatch_description">
            <span>{dataLive.description}</span>
          </div>
          <div className="infomatch_content">
            <span>{dataLive.homeTeam}</span>
            <span className="tiso">0 - 0</span>
            <span>{dataLive.awayTeam}</span>
          </div>
          <div className="blv-info">
            <div className="blv-name">{dataLive.name}</div>
            <div className="watching">
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.02299 27.5761C7.90332 27.552 7.78273 27.5312 7.66399 27.504C5.78952 27.0785 4.13959 26.2436 2.82049 24.82C1.72685 23.6395 1.07862 22.2414 0.827275 20.6543C0.64662 19.5122 0.581473 18.3654 0.658171 17.2103C0.744571 15.9102 1.05044 14.6567 1.43439 13.4175C1.70652 12.5387 1.98559 11.6604 2.21291 10.7696C2.43608 9.89404 2.41344 9.00833 2.14315 8.13739C2.13529 8.11244 2.13067 8.08703 2.14037 8.05469C3.7404 9.19129 4.64783 10.6878 4.55912 12.7231C4.66123 12.6233 4.76103 12.541 4.84327 12.4431C5.44253 11.7311 5.78859 10.8934 6.02608 10.0072C6.31346 8.93486 6.39201 7.83846 6.40356 6.73189C6.41834 5.30605 6.75147 3.96246 7.53138 2.75054C8.28635 1.57744 9.34255 0.76842 10.6118 0.219987C10.6256 0.21398 10.6423 0.214904 10.6635 0.21167C10.6635 0.230151 10.6681 0.246784 10.663 0.258797C10.1557 1.39586 10.1876 2.54864 10.5632 3.71065C10.8941 4.73405 11.4162 5.65997 12.051 6.51889C12.6572 7.339 13.3054 8.12815 13.9319 8.93301C14.6351 9.83629 15.2714 10.7788 15.6572 11.8697C15.9926 12.8183 16.1469 13.8015 16.2389 14.7976C16.2495 14.9122 16.2606 15.0263 16.2749 15.1811C16.3465 15.0891 16.4024 15.0259 16.4491 14.9565C16.906 14.2801 17.1505 13.5224 17.2909 12.7272C17.5067 11.5079 17.4439 10.2909 17.2452 9.07578C17.2424 9.06007 17.2419 9.0439 17.2378 8.99816C17.2849 9.05083 17.3177 9.08318 17.3464 9.11875C18.7131 10.8186 19.554 12.755 19.9264 14.8969C20.2646 16.8426 20.2313 18.7826 19.6727 20.6825C18.7509 23.8183 16.6676 25.9067 13.6811 27.1302C13.1825 27.3344 12.6433 27.4393 12.1226 27.5885C12.0764 27.6019 12.026 27.6019 11.9383 27.6135C12.0764 27.4781 12.191 27.3718 12.2996 27.2591C13.1894 26.3309 13.6847 25.2178 13.8372 23.9486C13.9583 22.94 13.9019 21.9448 13.5711 20.9759C13.3276 20.2639 12.9104 19.6559 12.4368 19.0811C12.1577 18.7424 11.874 18.407 11.6074 18.0591C10.8303 17.0445 10.5531 15.8838 10.6298 14.6248C10.6423 14.4234 10.6672 14.2224 10.6889 13.9918C10.5822 14.0584 10.4893 14.111 10.402 14.1716C9.14527 15.048 8.3173 16.2396 7.84233 17.6839C7.42373 18.9573 7.36043 20.2639 7.49996 21.5872C7.52307 21.8053 7.55541 22.0224 7.58221 22.24C7.58405 22.2558 7.5799 22.2724 7.57574 22.3135C6.71127 21.7544 6.29359 20.9329 6.08245 19.9373C6.02562 20.0509 5.97618 20.1369 5.93829 20.2274C5.66846 20.8817 5.5622 21.5682 5.57883 22.2705C5.61163 23.6294 5.94568 24.9041 6.68309 26.0592C7.01945 26.5859 7.43251 27.0452 7.91395 27.4435C7.95461 27.4772 7.9948 27.5114 8.03546 27.5456C8.0313 27.5557 8.02714 27.5659 8.02299 27.5761Z"
                  fill="white"
                />
              </svg>
              20k
            </div>
            <div className="follow-viewer">
              <div className="follow-icon" style={{ display: 'flex' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.4131"
                    cy="11.6208"
                    r="10.6678"
                    fill="#FC8B00"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4799 5.22004C12.4799 4.63087 12.0023 4.15326 11.4131 4.15326C10.8239 4.15326 10.3463 4.63087 10.3463 5.22004V10.5539H5.01242C4.42326 10.5539 3.94564 11.0316 3.94564 11.6207C3.94564 12.2099 4.42326 12.6875 5.01242 12.6875H10.3463V18.377C10.3463 18.9662 10.8239 19.4438 11.4131 19.4438C12.0023 19.4438 12.4799 18.9662 12.4799 18.377V12.6875H18.1694C18.7586 12.6875 19.2362 12.2099 19.2362 11.6207C19.2362 11.0316 18.7586 10.554 18.1694 10.554H12.4799V5.22004Z"
                    fill="white"
                  />
                </svg>
                <div className="ms-1">Follow</div>
              </div>
              <div className="viewer" style={{ display: 'flex' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2572 11.2485C16.1812 8.92095 16.2062 4.86699 13.8973 2.4867C11.5873 0.10534 7.82355 0.0638047 5.46669 2.39191C3.039 4.78978 3.08107 8.94278 6.0386 11.2677C4.22489 12.0276 2.75039 13.1948 1.65183 14.8152C0.555402 16.433 0.00479254 18.219 0 20.1855H1.88453C1.81318 16.286 5.0098 12.7443 9.12819 12.4972C11.0143 12.3844 12.738 12.87 14.2456 14.0112C16.2829 15.5533 17.2984 17.6349 17.3772 20.1776H19.3027C19.0876 15.9585 17.0476 13.0164 13.2572 11.2485ZM9.62608 10.5717C7.43056 10.5648 5.62697 8.75854 5.63177 6.56994C5.63656 4.37177 7.43056 2.58521 9.6346 2.58308C11.8386 2.58095 13.6305 4.36165 13.6422 6.56462C13.6534 8.7596 11.8301 10.5781 9.62608 10.5717Z"
                    fill="#FC8B00"
                  />
                  <path
                    d="M17.9451 9.54656C20.0764 7.84838 20.3693 5.05718 19.1846 3.07149C17.9896 1.06917 15.7586 0.391251 14.2456 0.695844C14.4464 1.1433 14.6562 1.58806 14.8453 2.0418C14.9095 2.19635 14.9913 2.24621 15.1566 2.2543C16.7636 2.33382 18.1707 3.74402 18.2574 5.35099C18.3382 6.8479 17.539 8.12917 16.1549 8.70556C16.0219 8.76082 15.981 8.83225 15.9743 8.96882C15.9505 9.44593 15.9118 9.92258 15.8799 10.3992C15.8741 10.4855 15.8718 10.5718 15.8696 10.6248C19.3091 11.4482 21.1618 13.5822 21.4502 17.0778H23.0477C22.8609 13.5247 21.1438 11.0385 17.9451 9.54656Z"
                    fill="#FC8B00"
                  />
                </svg>
                <div className="ms-1">{ Math.floor(Math.random()*10000)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
       
  );
}
