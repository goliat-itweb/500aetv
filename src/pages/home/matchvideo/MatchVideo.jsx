import React, { useEffect, useState } from 'react';
import './MatchVideo.css';
import Video from '../Video/Video';
import MatchSchedule from '../matchtime/MatchSchedule';
import PartnerLive from '../partnerlive/PartnerLive';
import footballmp4 from '../../../assets/video/football.mp4'
const videoOriginal = [{ cdnlink: '' }, { cdnlink: footballmp4 }];
const MatchVideo = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms/list`);
                const result = await response.json();
                const filteredDataCdn = result.rooms.filter(match => match.cdnlink !== "1").sort((a, b) => {
                    const dateTimeA = new Date(`${a.date}T${a.time}`);
                    const dateTimeB = new Date(`${b.date}T${b.time}`);
                    return dateTimeA - dateTimeB;
                });
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
    if (data.length > 1) {
        return (
            <div className='match_video'>
                
                {/* <div className="match_video">
                    <button className=" btn_league1 active">EPL</button>
                    <button className=" btn_league2">LaLiga</button>
                    <button className=" btn_league3">Serie A</button>
                    <button className=" btn_league4">Bundesliga</button>
                    <button className=" btn_league5">Ligue 1</button>
                </div> */}

                {data && (
                    <>
                        <Video data={data}></Video>
                        <MatchSchedule data={data}></MatchSchedule>
                    </>
                )}
            </div>
        );
    } else {
        return <div className='match_video'>
            {/* <div className='d-flex' style={{overflow:'scroll'}}>
                <button className="btn_leauge1 active">Premier</button>
                <button className="btn_leauge2">LaLiGa</button>
                <button className="btn_leauge3">Seria</button>
                <button className="btn_leauge4">Bundesliga</button>
                <button className="btn_leauge5">League1</button>
            </div> */}
            {data && (
                <>
                    <Video data={videoOriginal}></Video>
                    <PartnerLive></PartnerLive>
                </>
            )}
        </div>
    }

};

export default MatchVideo;
