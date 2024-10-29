import { React, useEffect, useState } from 'react';
import useStore from '../../store/useStore';
import arrow from '../../../assets/image/arrow.webp';
import kenhnhadai from '../../../assets/image/kenhnhadai.webp';
import vs from '../../../assets/image/vs.webp';
import './PartnerLive.css';

const PartnerLive = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [visibleMatches, setVisibleMatches] = useState(2);
    const [isExpanded, setIsExpanded] = useState(false);
    const setVideoList = useStore((state) => state.setVideoList);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const handleSeeMore = () => {
        setVisibleMatches(data.length);
        setIsExpanded(true);
    };

    const handleCollapse = () => {
        setVisibleMatches(2);
        setIsExpanded(false);
    };

    const fetchData = async () => {
        const url = `${process.env.REACT_APP_API_URL}/api/rooms/partnerlive`;
        try {
            const response = await fetch(url, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('CHƯA CÓ TRẬN ĐẤU NÀO CỦA KÊNH NHÀ ĐÀI' + response.statusText);
            }
            const data = await response.json();
            setData(data);
            setVideoList(data);
        } catch (error) {
            setError(error.message);
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) return <div className='text-center mb-2'>{error}</div>;

    if (data) {
        return (
            <div className='parent_partner text-center'>
                <img src={kenhnhadai} width='33%' alt="" />
                <div className='master_partner'>
                    {data
                        .filter((match) => match.m3u8)
                        .slice(0, visibleMatches)
                        .map((match, index) => (
                            <a href={`/videopartner/${match.matchId}`} key={index} className='text-decoration-none text-light' style={{width:'49%'}}>
                                <div className='main_partner '>
                                    <div className='match_partner'>
                                        <div className='match_team_partner'>
                                            <div className='match_team_partner_match'>
                                               
                                                <p> <img src={match.localteam_logo} height='20px' width='20px' alt="" />{truncateText(match.localteam_title, 10)}</p>
                                            </div>
                                            <div>
                                                <img src={vs} width='12px' alt="" />
                                            </div>
                                            <div>
                                                
                                                <p><img src={match.visitorteam_logo} width='20px' height='20px' alt="" />{truncateText(match.visitorteam_title, 10)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}

                </div>
                <div className='match_see_more'>
                    {data && (
                        <>
                            {!isExpanded && visibleMatches < data.filter((match) => match.m3u8).length && (
                                <div onClick={handleSeeMore}>
                                    <a href="#/" className="">XEM THÊM</a>
                                    <img src={arrow} alt="" />
                                </div>
                            )}
                            {isExpanded && (
                                <div onClick={handleCollapse}>
                                    <a href="#/" className="">THU GỌN</a>
                                    <i className="fa-solid fa-arrow-up"></i>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return <div className='text-center'>...LOADING KÊNH NHÀ ĐÀI</div>;
    }
};

export default PartnerLive;
