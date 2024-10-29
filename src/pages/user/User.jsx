import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/fetch`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUserData(data.user);
        } catch (error) {
            console.error('Error fetching user data:', error);
            localStorage.clear();
            navigate('/login');
        }
    };

    const checkSessionExpiry = () => {
        const tokenExpiry = localStorage.getItem('tokenExpiry');

        if (tokenExpiry && new Date().getTime() > tokenExpiry) {
            localStorage.clear();
            alert('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
            window.location.href = '/login';
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate('/login');
        } else {
            fetchUserData();
        }
    }, [navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            checkSessionExpiry();
        }, 3600000); // Check every hour
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-dark text-center py-5'>
            {userData && (
                <div>
                    <p>TÀI KHOẢN : {userData.username}</p>
                    <p>TÊN HIỂN THỊ : {userData.name}</p>
                    <p>CẤP ĐỘ : {userData.lever}</p>
                    <p>ẢNH ĐẠI DIỆN : <img src={`${process.env.REACT_APP_API_URL}${userData.avatar}` } width='50px' height='50px' alt="" /></p>
                    <Link to="/profile/user/edit">
                        <button className='btn btn-primary'>SỬA THÔNG TIN</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default User;
