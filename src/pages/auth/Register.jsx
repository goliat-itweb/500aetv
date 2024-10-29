import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);


  const navigate = useNavigate(); 
  useEffect(() => {
      const token = localStorage.getItem('accessToken');
    
      if (token) {
          navigate('/')
      }
  }, []);

  const validate = () => {
    const errors = {};

    // Username validation
    if (username.length < 3 || username.length > 15) {
      errors.username = 'Tên người dùng phải có từ 3 đến 15 ký tự.';
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      errors.username = 'Tên người dùng chỉ được chứa các ký tự chữ và số.';
    }

    // Name validation
    if (name.length < 3 || name.length > 15) {
      errors.name = 'Tên phải có từ 3 đến 15 ký tự.';
    }

    // Password validation
    if (password.length < 8) {
      errors.password = 'Mật khẩu phải dài ít nhất 8 ký tự.';
    }
    if (!/\d/.test(password)) {
      errors.password = 'Mật khẩu phải chứa ít nhất một chữ số.';
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.password = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt.';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const registrationData = { username, name, password };
    setServerError(null);  // Clear any previous server error

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
     
        alert('Đăng ký thành công');
        setServerError('Đăng ký thành công');
        window.location.href = '/login'
      } else {
        const errorData = await response.json();
      
        setServerError(errorData.errors[0].msg || 'Registration failed due to an unknown error.');
      }
    } catch (error) {
     
      setServerError('Error during registration: ' + error.message);
    }
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">ĐĂNG KÝ</h2>

        <div className="input-container">
          <label className="register-label">Tên Tài Khoản</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="register-input"
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="input-container">
          <label className="register-label">Tên Hiển Thị</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="register-input"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="input-container">
          <label className="register-label">Mật Khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="input-container">
          <label className="register-label">Xác Nhận Mật Khẩu</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="register-input"
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        {serverError && <div className="text-center server-error-message">{serverError}</div>}

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
