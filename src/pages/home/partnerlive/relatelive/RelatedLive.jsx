import React, { useState } from 'react';
import './RelatedLive.css';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../../assets/image/arrow.webp';

const RelatedVideo = ({ data }) => {
    const [visibleMatches, setVisibleMatches] = useState(4);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSeeMore = () => {
        setVisibleMatches(filteredMatches.length); // Show all matches
        setIsExpanded(true);
    };

    const handleCollapse = () => {
        setVisibleMatches(4); // Collapse to show only two matches
        setIsExpanded(false);
    };

    const navigate = useNavigate();

    const handleViewNow = (roomId) => {
        navigate(`/rooms/${roomId}`);
    };

    // Filter out matches with name "BLV Giang A Cay"
    const filterCdn = data.rooms.filter(match => match.cdnlink !== "1");
    const filteredMatches = filterCdn.filter(match => match.name !== "BLV Giang A Cay").sort((a, b) => {
        // Combine date and time into a single Date object for both a and b
        const dateTimeA = new Date(`${a.date}T${a.time}`);
        const dateTimeB = new Date(`${b.date}T${b.time}`);

        // Sort by the combined date and time
        return dateTimeA - dateTimeB;
    });

    return (
        <div className='matchSchedule_relate'>
            <div>
                <div className="row g-4"> {/* Add Bootstrap gutter class here */}
                    {
                        filteredMatches.slice(0, visibleMatches).map((match, index) => (
                            <div className="col-lg-6" key={index}>
                                <a href={`https://500ae1.tv/rooms/${match._id}`} className='text-decoration-none text-light'>
                                    <div className='match_schedule_relate'>
                                        <div className='match_name_relate'>
                                            <div className='match_team_one_relate'>
                                                <p>{match.homeTeam}</p>
                                                <img src={match.homeLogo} width='30px' height="30px" alt={`${match.homeTeam} logo`} />
                                            </div>
                                            <h2 className='mx-3 vs_relate'>Vs</h2>
                                            <div className='match_team_two_relate'>
                                                <p>{match.awayTeam}</p>
                                                <img src={match.awayLogo} width='30px' height="30px" alt={`${match.awayTeam} logo`} />
                                            </div>
                                        </div>
                                        <div className='match_time_relate'>
                                            <div className='match_time_schedule_relate'>
                                                <p>{match.description}</p>
                                            </div>
                                            <button onClick={() => handleViewNow(match._id)}>
                                                XEM NGAY
                                                <i className="fa-regular fa-circle-play ms-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='match_see_more_relate'>
                    {!isExpanded && visibleMatches < filteredMatches.length && (
                        <div onClick={handleSeeMore}>
                            <a href="#/" className=''>XEM THÊM</a>
                            <img src={arrow} alt="" width='10px' height='10px' />
                        </div>
                    )}
                    {isExpanded && (
                        <div onClick={handleCollapse}>
                            <a href="#/" className=''>THU GỌN</a>
                            <i className="fa-solid fa-arrow-up" ></i>
                        </div>
                    )}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default RelatedVideo;
