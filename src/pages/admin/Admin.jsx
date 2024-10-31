import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

// Reusable Input Component
const InputField = ({ id, label, type = "text", value, onChange, placeholder }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}:</label>
        <input
            type={type}
            id={id}
            name={id}
            className="form-control"
            value={value}
            onChange={onChange}
            required
            placeholder={placeholder}
        />
    </div>
);

const Admin = () => {
    const [data, setData] = useState(null);
    const [dataRoom, setDataRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [deleteRoomId, setDeleteRoomId] = useState('');
    const [editRoomId, setEditRoomId] = useState(null); 

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        fetch(`${process.env.REACT_APP_API_URL}/api/rooms/listroomadmin`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                if (response.status === 401 || response.status === 403) {
                    alert('Bạn không có quyền truy cập trang web này');
                    navigate('/');
                    return;
                }
                return response.json();
            })
            .then(data => {
                if (data.status === "success") {
                    setDataRoom(data);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
     
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');

        const url = editRoomId
            ? `${process.env.REACT_APP_API_URL}/api/rooms/${editRoomId}`
            : `${process.env.REACT_APP_API_URL}/api/rooms/create`;

        const method = editRoomId ? 'PUT' : 'POST';
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.status === 401 || response.status === 403) {
                    alert('Bạn không có quyền truy cập trang web này');
                    navigate('/');
                    return;
                }
                return response.json();
            })
            .then(data => {
                if (data.status === "success") {
                    setSubmitSuccess(true);
                    setData(data);
                    alert('Dữ liệu gửi lên thành công!');
                    window.location.reload();
                } else {
                    setError(data.message || 'Lỗi, vui lòng thử lại');
                }
            })
            .catch(error => {
                setError(error.message);
            });
    };

    // Pre-fill form when editing a room
    const handleEditRoom = (room) => {
        setEditRoomId(room._id);
        setFormData({
            homeTeam: room.homeTeam,
            awayTeam: room.awayTeam,
            homeLogo: room.homeLogo,
            awayLogo: room.awayLogo,
            description: room.description,
            name: room.name,
            date: room.date,
            time: room.time,
            cnd: room.cdnlink,
            
        });
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the form on edit
    };

    const handleDeleteRoom = () => {
        if (window.confirm("Bạn có chắc muốn xóa phòng?")) {
            const token = localStorage.getItem('accessToken');
            fetch(`${process.env.REACT_APP_API_URL}/api/rooms/${deleteRoomId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(response => {
                    if (response.status === 401 || response.status === 403) {
                        alert('Bạn không có quyền truy cập trang web này');
                        navigate('/');
                        return;
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.status === "success") {
                        alert('Phòng đã được xóa thành công!');
                        window.location.reload();
                    } else {
                        setError(data.message || 'Lỗi, vui lòng thử lại');
                    }
                })
                .catch(error => {
                    setError(error.message);
                });
        }
    };

    if (loading) return <p>Loading...</p>;

    const fields = [
        { id: 'homeTeam', label: 'Tên Đội Nhà', placeholder: 'Manchester United' },
        { id: 'awayTeam', label: 'Tên Đội Khách', placeholder: 'Chelsea' },
        { id: 'homeLogo', label: 'Logo Đội Nhà', placeholder: 'https://.....' },
        { id: 'awayLogo', label: 'Logo Đội Khách', placeholder: 'https://.....' },
        { id: 'description', label: 'Tên Giải Đấu', placeholder: 'Premier League' },
        { id: 'name', label: 'Tên Bình Luận Viên', placeholder: 'BLV Giang A Phò' },
        { id: 'date', label: 'Ngày', type: 'date' },
        { id: 'time', label: 'Giờ', type: 'time' },
        { id: 'cnd', label: 'Link CND', placeholder: 'https://....' },
        { id: 'hot', label: 'TRẬN HOT', placeholder: 'Nếu có điền YES, không có điền gì cũng được dấu cách cũng được' },
    ];

    return (
        <div className=" mt-5 main_admin">
            <div style={{
                border: '1px solid',
                borderRadius: '10px',
                padding: '30px'
            }}>
                <h3 className="text-center mb-4">{editRoomId ? "Sửa Phòng Live" : "Tạo Phòng Live"}</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                {submitSuccess && <div className="alert alert-success mt-3">Gửi Dữ Liệu Thành Công!  <a href={`https://500ae1.tv/rooms/${data.roomId}`}>Nhấn Vào Để Đến Phòng</a></div>}
                {data && <div className="alert alert-info">{data.message} </div>}
                <form onSubmit={handleSubmit} className='text-center'>
                    <div className="row">
                        {fields.map(({ id, label, type, placeholder }) => (
                            <div className="col-md-6 mb-3" key={id}>
                                <InputField
                                    id={id}
                                    label={label}
                                    type={type}
                                    value={formData[id] || ''}
                                    onChange={handleInputChange}
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-4">{editRoomId ? "Sửa Phòng" : "GỬI"}</button>
                </form>
            </div>

            <div className='text-center mb-4 mt-5 pb-5'>
                <div style={{
                    border: '1px solid',
                    borderRadius: '10px',
                    padding: '30px'
                }}>
                    <h3 className='m-0'>Xóa Phòng Live</h3>
                    <button type="button" className="btn btn-danger btn-block mt-4 mb-2" onClick={handleDeleteRoom}>
                        Xóa Phòng
                    </button>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập ID Phòng (Coppy roomId ở dưới)"
                        value={deleteRoomId}
                        onChange={(e) => setDeleteRoomId(e.target.value)} // Store input value in state
                    />
                </div>
            </div>

            <div className="mt-4 text-dark px-5 py-5 text-center" style={{ border: '1px solid white', borderRadius: '10px' }}>
                <h3 className="text-light mb-3 ">DANH SÁCH PHÒNG</h3>
                <div className="row">
                    {dataRoom && dataRoom.rooms.map((room, index) => (
                        <div key={room._id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <p className="card-title" style={{ textDecoration: 'underline', color: 'red' }}>ROOMID: {room._id}</p>
                                    <p className="card-title">{room.name}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="team-info text-center">
                                            <p className="mb-1">{room.homeTeam}</p>
                                            <img src={room.homeLogo} alt={room.homeTeam} className="img-fluid" width="50" />
                                        </div>
                                        <span className="mx-2">Vs</span>
                                        <div className="team-info text-center">
                                            <p className="mb-1">{room.awayTeam}</p>
                                            <img src={room.awayLogo} alt={room.awayTeam} className="img-fluid" width="50" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="mb-0">Date: {room.date}</p>
                                        <p className="mb-0">Time: {room.time}</p>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button onClick={() => handleEditRoom(room)} className="btn btn-primary btn-block">Sửa Thông Tin</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;
