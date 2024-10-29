import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import iconWallet from '../../assets/image/wallet.webp'; // Replace with the correct icon paths
import iconDeposit from '../../assets/image/deposit.webp';
import iconWithdraw from '../../assets/image/withdraw.webp';
import iconVip from '../../assets/image/vip.webp';

const UserDashboard = () => {
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

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/login');
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
    <div>
      {userData && <div className='main_user'>
        <div className='container'>
          <div className='container'>
          <div className="dashboard-container">
          <div className="account-summary">
            <div className="account-header">
              <img src={`${process.env.REACT_APP_API_URL}${userData.avatar}` } width='50px' height='50px' alt="User Avatar" className="avatar" />
              <div className="account-info">
                <p className="account-name m-0">{userData.name}</p>
                <p className="account-vip m-0"> {userData ? userData.lever : '0'}</p>
                <div className="balance">
                  <span>VND</span>
                  <input type="text" value={userData ? userData.__v : '0'} readOnly />
                </div>
              </div>
            </div>
            <div className="account-actions">
              <div className="action-item">
                <a href="/" className="text-decoration-none text-light">
                  <img src={iconWallet} alt="Wallet Icon" />
                  <p>Ví tiền</p>
                </a>
              </div>
              <div className="action-item">
                <a href="/" className="text-decoration-none text-light">
                  <img src={iconDeposit} alt="Deposit Icon" />
                  <p>Nạp tiền</p>
                </a>
              </div>
              <div className="action-item">
                <a href="/" className="text-decoration-none text-light">
                  <img src={iconWithdraw} alt="Withdraw Icon" />
                  <p>Rút tiền</p>
                </a>
              </div>

              <div className="action-item" >
                <a href="/" className="text-decoration-none text-light">
                  <img src={iconVip} alt="VIP Icon" />
                  <p>Vip</p>
                </a>
              </div>
            </div>
          </div>

          <div className="features-list">
            <h6>Chức năng</h6>
            <a href="/profile/user" className='text-decoration-none text-light'>
            <div className="feature-item">
              <i className="fas fa-user-circle"></i>
              <p className="m-0 ms-4">Hồ sơ</p>
              <i className="fas fa-chevron-right"></i>
            </div>
            </a>
            <div className="feature-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <p className="m-0 ms-4">Đăng xuất</p>
              <i className="fas fa-chevron-right"></i>
            </div>

  
          </div>
        </div>
          </div>
        </div>
      </div>}
    </div>
  ); 
};

export default UserDashboard;
