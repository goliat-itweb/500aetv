import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [navigate]);

  return (
    <div className="text-center">
      <h1>404 - Trang không tồn tại</h1>
      <p>Có vẻ như đường liên kết này không tồn tại</p>
      <p>Sẽ quay về trang chủ sau 5s</p>
    </div>
  );
}

export default NotFoundPage;
