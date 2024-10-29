import { React, useEffect, useState } from 'react';
import useStore from '../../store/useStore';
import arrow from '../../../assets/image/arrow.webp';
import kenhnhadai from '../../../assets/image/kenhnhadai.webp';
import vs from '../../../assets/image/vs.webp';
import { Link } from 'react-router-dom';
import './PartnerLiveAtTopPc.css';

const PartnerLiveAtTopPc = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [visibleMatches, setVisibleMatches] = useState(3); // Default value for > 1000px
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
    setVisibleMatches(window.innerWidth < 1000 ? 2 : 3); // Reset based on window size
    setIsExpanded(false);
  };

  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/rooms/partnerlive`;
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        throw new Error(
          'CHƯA CÓ TRẬN ĐẤU NÀO CỦA KÊNH NHÀ ĐÀI' + response.statusText
        );
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

    const handleResize = () => {
      // Update visibleMatches based on screen width
      if (window.innerWidth < 1000) {
        setVisibleMatches(2);
      } else {
        setVisibleMatches(3);
      }
    };

    // Set initial state based on screen width
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (error) return <div className='text-center mb-2'>{error}</div>;

  if (data) {
    return (
      <div className='parent_partner_attop text-center'>
        <img src={kenhnhadai} width='33%' alt='' />
        <div className='master_partner_attop'>
          {data
            .filter((match) => match.m3u8)
            .slice(0, visibleMatches)
            .map((match, index) => {
              return (
                <Link
                  to={`/videopartner/${match.matchId}`}
                  key={index}
                  className='text-decoration-none text-light'
                >
                  <div
                    style={{ backgroundColor: '#232E44', borderRadius: '10px' }}
                    className='mt-2 py-2'
                  >
                    <div className='d-flex justify-content-between px-2'>
                      <div className='d-flex justify-content-between align-items-center partnermatch_attop'>
                        <div>
                          <div>
                            <img
                              src={match.localteam_logo}
                              width='35px'
                              height='35px'
                              alt=''
                            />
                          </div>
                          <div>
                            <p className='m-0'>
                              {truncateText(match.localteam_title, 10)}
                            </p>
                          </div>
                        </div>
                        <div>
                          <img src={vs} width='25px' height='25px' alt='' />
                        </div>
                        <div>
                          <div>
                            <img
                              src={match.visitorteam_logo}
                              width='35px'
                              height='35px'
                              alt=''
                            />
                          </div>
                          <div>
                            <p className='m-0'>
                              {truncateText(match.visitorteam_title, 10)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='partnerinfo_attop'>
                        <div></div>

                        <div className=' mx-3 text-end'>
                          <div>
                            <p
                              className='m-0'
                              style={{ color: '#FF6700' }}
                            >
                              {getDayOfWeek(match.timestamp)}
                            </p>
                            <h6 className='m-0'>{match.startTime}</h6>
                            <p className='m-0'>
                              {truncateText(match.league_title, 10)}
                            </p>

                            <div>
                              <button className='watch-button mt-2'>
                                XEM NGAY
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          <div className='match_see_more_at_top'>
            {data && (
              <>
                {!isExpanded &&
                  visibleMatches <
                    data.filter((match) => match.m3u8).length && (
                    <div onClick={handleSeeMore}>
                      <div>
                        <a href='#/' className=''>
                          XEM THÊM
                        </a>
                      </div>
                      <img src={arrow} alt='' width='20px' />
                    </div>
                  )}

                {isExpanded && (
                  <div onClick={handleCollapse}>
                    <div>
                      <a href='#/' className=''>
                        THU GỌN
                      </a>
                    </div>
                    <i
                      className='fa-solid fa-arrow-up'
                      style={{ color: '#FF6700' }}
                    ></i>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className='text-center'>...LOADING KÊNH NHÀ ĐÀI</div>;
  }
};

export default PartnerLiveAtTopPc;
