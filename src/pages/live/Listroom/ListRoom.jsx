import { React, useEffect, useState } from 'react';
import MatchSchedule from '../../home/matchtime/MatchSchedule';
import PartnerLive from '../../home/partnerlive/PartnerLive';
import './ListRoom.css'
const ListRoom = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/list`);
                const result = await response.json();
               
                const filteredDataCdn = result.rooms.filter(match =>match.cdnlink !== "1");
                setData(filteredDataCdn);
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
        <div className='listroom text-center pt-5 pb-5'>
            <div className=''>
                <div>
                    {data.length > 1 ? (
                        <>
                          
                            <div className='text-center video_livestream'>
                                <div className='video_stream'>
                                    {data && <MatchSchedule data={data}></MatchSchedule>}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='mt-5'>
                    <h1>NHÀ ĐÀI</h1>
                    <PartnerLive></PartnerLive>
                </div>
            </div>
        </div>
    );
    
}

export default ListRoom;
