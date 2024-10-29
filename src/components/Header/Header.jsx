import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/image/mainlogo.webp';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        navigate('/login');
      };
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className="header">
            <div className="menu_toggle" onClick={toggleMenu}>
                <span className="menu_icon">&#9776;</span>
            </div>
            <div className="logo_container">
                <a href="/" className="header_logo">
                    <img src={logo} alt="500AE Logo" />
                </a>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav className="nav_bar">
                    <div><img src={logo} alt="" width="80%" /></div>
                      {!isLoggedIn ? (<div className="auth_buttons d-flex">
                        <button className="register_btn" onClick={() => { navigate('/register'); toggleMenu(); }}>ĐĂNG KÝ</button>
                        <button className="login_btn" onClick={() => { navigate('/login'); toggleMenu(); }}>ĐĂNG NHẬP</button>
                    </div>) : (
                        <div className="auth_buttons d-flex">
                        <button className="register_btn" onClick={handleLogout}>ĐĂNG XUẤT</button>
                    </div>
                    )}
                    {/* Close the sidebar when a nav link is clicked */}
                    <NavLink to="/" className="nav_link" onClick={toggleMenu}>TRANG CHỦ</NavLink>
                    <NavLink to="/soikeo" className="nav_link" onClick={toggleMenu}>TRẬN ĐẤU SẮP TỚI</NavLink>
                    <NavLink to="/bxh" className="nav_link" onClick={toggleMenu}>BẢNG XẾP HẠNG</NavLink>
                    <NavLink to="https://500ae.name" className="nav_link" onClick={toggleMenu}>TIN TỨC</NavLink>
                </nav>

            </div>

            {/* Overlay */}
            {isOpen && <div className="sidebar_overlay" onClick={toggleMenu}></div>}
        </header>
    );
};

export default Header;
