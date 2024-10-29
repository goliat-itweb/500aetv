import {React ,useEffect, useState} from 'react';
import useStore from '../../store/useStore';
import mulog from '../../../assets/image/mulogo.webp'
import chelsealog from '../../../assets/image/chelsealogo.webp'
import smallLogo from '../../../assets/image/smallLogo.webp'
import smallLogo1 from '../../../assets/image/smallLogo2.webp'
import win from '../../../assets/image/win.webp'

import './SoiKeoDetails.css'
const SoiKeoDetails = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // const videoList = useStore((state) => state.videoList);
    // const getTimeFromDateTime = (dateTimeString) => {
    //     const parts = dateTimeString.split(' ')
    //      return parts[1];
    // }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/list`);
                const result = await response.json();
                const filterData = result.rooms.filter(match => match.name !== "BLV Giang A Cay" )
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
        <div className='soikeo_chitiet pb-5 mb-5'>
            <div className='py-4 px-5 soikeo_delails'>
                <div className='match_name  soikeo_delails_one'>
                    <div className='match_team_one '>
                        <p>Machester</p>
                        <img src={mulog} alt='' width='40%' />
                    </div>
                    <h2 className='mx-3'>Vs</h2>
                    <div className='match_team_two'>
                        <p>Chelsea</p>
                        <img src={chelsealog} alt='' width='40%' className='' />
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-3 soikeo_delails_two'>
                    <div>
                        <p className='m-0'>UEFA EURO 2024</p>
                        <p className='m-0'>BLV Jerry</p>
                        <h5 className='m-0'>00:45 - 10.08
                        </h5>
                    </div>
                    <div>
                        <button>XEM NGAY
                            <i className="fa-regular fa-circle-play ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around mt-3 soikeo_details_find'>
                <p><i className="fa-solid fa-bars"></i></p>
                <p><i className="fa-solid fa-shirt"></i></p>
                <p>VS</p>
                <p><i className="fa-solid fa-ranking-star"></i></p>
            </div>
            <div className='text-center circle_main mt-3'>
                <h4>WIN RATE</h4>
                <div className='d-flex justify-content-around'>
                    <div className="circle-container">
                        <div className="circle">
                            <span className="circle-number">1</span>
                        </div>
                        <div className="circle-label">Ipswich Town</div>
                    </div>
                    <div className="circle-container">
                        <div className="circle">
                            <span className="circle-number">X</span>
                        </div>
                        <div className="circle-label">Draw</div>
                    </div>
                    <div className="circle-container">
                        <div className="circle">
                            <span className="circle-number">2</span>
                        </div>
                        <div className="circle-label">Liverpool</div>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <h4>HISTORY</h4>
                <div className='frame_soikeo mt-2'>
                    <div className='d-flex justify-content-between frame_soikeo_one'>
                        <p>Ipswich</p>
                        <div className='d-flex'>
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />

                        </div>
                    </div>
                    <div className='d-flex justify-content-around soikeo_details_vip'>
                        <div className='d-flex  soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />

                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />

                            </div>
                        </div>
                        <div className='d-flex soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />
                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />

                            </div>
                        </div>
                        <div className='d-flex soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />
                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='frame_soikeo mt-2'>
                    <div className='d-flex justify-content-between frame_soikeo_one'>
                        <p>Ipswich</p>
                        <div className='d-flex'>
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />

                        </div>
                    </div>
                    <div className='d-flex justify-content-around soikeo_details_vip'>
                        <div className='d-flex  soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />

                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />

                            </div>
                        </div>
                        <div className='d-flex soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />
                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />

                            </div>
                        </div>
                        <div className='d-flex soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />
                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='frame_soikeo mt-2'>
                    <div className='d-flex justify-content-between frame_soikeo_one'>
                        <p>Ipswich</p>
                        <div className='d-flex'>
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />
                            <img src={win} width={20} height={20} alt="" />

                        </div>
                    </div>
                    <div className='d-flex justify-content-around soikeo_details_vip'>
                        <div className='d-flex  soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />

                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />

                            </div>
                        </div>
                        <div className='d-flex soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />
                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />

                            </div>
                        </div>
                        <div className='d-flex soikeo_details_scores'>
                            <div>
                                <img src={smallLogo} alt="" />
                            </div>
                            <p className='mx-1'>1-0</p>
                            <div>
                                <img src={smallLogo1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default SoiKeoDetails;
