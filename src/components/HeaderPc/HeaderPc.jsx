import React, { useState, useEffect } from 'react';
import './HeaderPc.css';
import logo from '../../assets/image/logo-header.png';
import { NavLink } from 'react-router-dom';

const HeaderPc = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className=''>
            <div className="header_Pc d-flex justify-content-center align-items-center">
                <nav className="nav_bar_Pc mt-2  d-flex justify-content-between align-items-center" style={{ width: '1500px' }}>
                    <div className='text-start'>
                        <a href="/">
                            <img src={logo} width='100%' alt="500AE Logo" className="header-logo" />
                        </a>
                    </div>
                    <div>
                        <NavLink to="/" className="nav_link_Pc ">TRANG CHỦ</NavLink>
                    </div>
                    <div>
                        <NavLink to="/soikeo" className="nav_link_Pc">TRẬN ĐẤU SẮP TỚI</NavLink>
                    </div>
                    <div>
                        <NavLink to="/bxh" className="nav_link_Pc ">BẢNG XẾP HẠNG</NavLink>
                    </div>
                    <div>
                        <NavLink to="https://shbetq.ink/?f=3699878" rel='noopener' className="nav_link_Pc ">CƯỢC NGAY</NavLink>
                    </div>
                    <div className="dropdownheader">
                        <span className="nav_link_Pc  dropdown-toggle">TIN TỨC</span>
                        <div className="dropdown-menu">
                            <NavLink to="https://500ae.name"  rel='noopener' className="dropdown-item">TIN TỨC THỂ THAO</NavLink>
                            <NavLink to="https://www.youtube.com/@MeBong-500ae/"  rel='noopener' className="dropdown-item">XEM VIDEO BÓNG ĐÁ</NavLink>
                        </div>

                    </div>
                    <div>
                        {isLoggedIn ? (
                            <div>
                                <NavLink to="/profile" className="nav_link_Pc ">TRANG CÁ NHÂN</NavLink>
                            </div>
                        ) : (
                            <>
                                <NavLink to="/login" className="nav_link_Pc">ĐĂNG NHẬP</NavLink>
                                <NavLink to="/register" className="nav_link_Pc ">ĐĂNG KÝ</NavLink>
                            </>
                        )}
                    </div>
                </nav>
            </div >
        </div >

    );
};

export default HeaderPc;
