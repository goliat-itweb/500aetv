import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import HomePagePc from "./pages/hompagePc/HomePagePc";
import SoikeoPage from "./pages/soikeo/SoiKeo";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/ToolBar";
import SoiKeoDetails from "./pages/soikeo/soikeodetails/SoiKeoDetails";
import BangXepHang from "./pages/bangxephang/BangXepHang";
import LiveStream from "./pages/live/Livestrean";
import Community from "./pages/community/Community";
import UserDashboard from "./pages/user/UserDashboard";
import User from "./pages/user/User";
import EditProfile from "./pages/user/EditProfile";
import NotFoundPage from "./pages/404page/NotFoundPage";
import LoginForm from "./pages/auth/Login";
import RegisterForm from "./pages/auth/Register";
import Admin from "./pages/admin/Admin";
import ListRoom from "./pages/live/Listroom/ListRoom";
import HeaderPc from "./components/HeaderPc/HeaderPc";
import VideoPartnerLive from "./pages/home/partnerlive/videopartner/VideoPartner";
import "./styles/App.css";
import FooterPc from "./components/footer/FooterPc";

function MainContent({ isMobile }) {
  const location = useLocation(); // Get the current location
  const isLiveStreamRoute = location.pathname.startsWith("/rooms"); // Check if the current route starts with '/rooms'

  return (
    <>
      <Routes>
        <Route path="/" element={isMobile ? <HomePage /> : <HomePagePc />} />
        <Route path="/soikeo" element={<SoikeoPage />} />
        <Route path="/soikeo/:matchId" element={<SoiKeoDetails />} />
        <Route path="/bxh" element={<BangXepHang />} />
        <Route path="/rooms/:roomId" element={<LiveStream />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/profile/user" element={<User />} />
        <Route path="/profile/user/edit" element={<EditProfile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/news" element={<Community />} />
        <Route path="/betting" element={<Community />} />
        <Route path="/wheel" element={<Community />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/listroom" element={<ListRoom />} />
        <Route path="/videopartner/:matchId" element={<VideoPartnerLive />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isMobile && !isLiveStreamRoute && (
        <>
          <FooterPc />
          <Toolbar />
        </>
      )}{" "}
      {/* Only show Toolbar if not on a livestream route */}
    </>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="main_app">
        <div className="background_image1">
          <div className="main_container">
            {isMobile ? (
              <>
                <Header />
              </>
            ) : (
              <>
                <HeaderPc />
              </>
            )}
            <MainContent isMobile={isMobile} /> {/* Pass isMobile as a prop */}
            {isMobile ? (
              <></>
            ) : (
              <>
                <FooterPc />
              </>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
