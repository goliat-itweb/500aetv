import {React, useState , useEffect} from 'react';
import './SoiKeoMatch.css'

import useStore from '../../store/useStore';
import {Link} from 'react-router-dom';


const SoiKeoMatch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const videoList = useStore((state) => state.videoList);
    const getTimeFromDateTime = (dateTimeString) => {
        const parts = dateTimeString.split(' ')
         return parts[1];
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/list`);
                const result = await response.json();
    
                const filterData = result.rooms
                    .filter(match => match.name !== "BLV Giang A Cay")
                    .sort((a, b) => {
                        // Combine date and time into a single Date object for both a and b
                        const dateTimeA = new Date(`${a.date}T${a.time}`);
                        const dateTimeB = new Date(`${b.date}T${b.time}`);
                        
                        // Sort by the combined date and time
                        return dateTimeA - dateTimeB;
                    });
    
                setData(filterData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='mt-3 '>
            <div>
                <h3>Lịch Trực Tiếp</h3>
                {data.map((match, index) => (
                    <div  
                      className='d-flex justify-content-between soikeo_matchtime mt-2 py-2 px-5 align-items-center text-center' key={index}>
                        <div>
                            <p className='m-0'>{match.time}</p>
                            <p className='m-0'>{match.date}</p>
                        </div>
                        <div className='d-flex justify-content-between ' style={{width:'20%'}}>
                            <div>
                                <img className='d-block mb-3' src={match.homeLogo} width='25px' alt="" />
                                <img className='d-block' src={match.awayLogo} width='25px' alt="" />
                            </div>
                            <div  className='name_of_match text-end'>
                                <p className='m-0 ms-2 mb-2'>{match.homeTeam}</p>
                                <p className='m-0'>{match.awayTeam}</p>
                            </div>
                        </div>
                        <div className='d-flex signature'>
                            <div>
                                <p className='m-0'>-</p>
                                <p className='m-0'>-</p>
                            </div>
                            <div>
                                <p className='m-0'><i className="fa-regular fa-bell"></i></p>
                                <p className='m-0'><i className="fa-regular fa-star"></i></p>
                            </div>
                        </div>
                    </div>
                ))}
                <h3>Trận Nhà Đài</h3>
                {videoList.map((match, index) => (
                    <div
                      className='d-flex justify-content-between soikeo_matchtime mt-2 py-2 px-5 align-items-center text-center' key={index}>
                        <div>
                            <p className='m-0'>{getTimeFromDateTime(match.startTime)}</p>
                            <p className='m-0'>Hôm Nay</p>
                        </div>
                        <div className='d-flex justify-content-between ' style={{width:'20%'}}>
                            <div>
                                <img className='d-block mb-3' src={match.localteam_logo} width='25px' alt="" />
                                <img className='d-block' src={match.visitorteam_logo} width='25px' alt="" />
                            </div>
                            <div  className='name_of_match text-end'>
                                <p className='m-0 ms-2 mb-2'>{match.localteam_title}</p>
                                <p className='m-0'>{match.visitorteam_title}</p>
                            </div>
                        </div>
                        <div className='d-flex signature'>
                            <div>
                                <p className='m-0'>-</p>
                                <p className='m-0'>-</p>
                            </div>
                            <div>
                                <p className='m-0'><i className="fa-regular fa-bell"></i></p>
                                <p className='m-0'><i className="fa-regular fa-star"></i></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SoiKeoMatch;
