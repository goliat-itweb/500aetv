import React, { useState } from 'react';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (name.length < 2 || name.length > 50) {
        alert('Name must be between 2 and 50 characters.');
        return;
    }

    if (avatar) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(avatar.type)) {
            alert('Chỉ nhận ảnh có đuôi .PNG, JPG, GIF');
            return;
        }
    
        if (avatar.size > 2 * 1024 * 1024) {
         
            alert('Ảnh phải nhỏ hơn 2MB');
            return;
        }
    }

    // Proceed to submit the form
    const formData = new FormData();
    formData.append('name', name);
    formData.append('avatar', avatar);

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/edituser`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to update profile');
        }

       
        alert('Profile updated successfully!');
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
    }
};

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]); // Set the avatar file when selected
  };

  return (
    <div className=" mt-5 bg-dark text-dark py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center">SỬA THÔNG TIN</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group mb-3">
                <label htmlFor="name">TÊN HIỂN THỊ:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="avatar">ẢNH ĐẠI DIỆN:</label>
                <input
                  type="file"
                  className="form-control"
                  id="avatar"
                  name="avatar"
                  onChange={handleFileChange} 
                  accept="image/*" 
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                LƯU THAY ĐỔI
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
