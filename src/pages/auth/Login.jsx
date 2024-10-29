import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            navigate('/')
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 
      
        
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (response.ok) {
                const data = await response.json();
               
            
                const expirationTime = new Date().getTime() +  10* 60 * 60 * 1000;
              
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('tokenExpiry', expirationTime);
                
                window.location.href = '/profile';         
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Đăng nhập không thành công');
                console.error('Login failed:', errorData);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Lỗi trong quá trình đăng nhập: ' + error.message);
        }
    };

   

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">ĐĂNG NHẬP</h2>
                <div className="input-container">
                    <label className="login-label">TÊN TÀI KHOẢN</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div className="input-container">
                    <label className="login-label">MẬT KHẨU</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <button type="submit" className="login-button">ĐĂNG NHẬP</button>
                {error && <div className="error-message text-center">{error}</div>}
                <div className='text-center mt-3'>
                    <a href="/register">ĐĂNG KÝ</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
