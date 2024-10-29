import React from 'react';
import './VideoPc.css';
import VideoLivePc from './VideoLivePc';


const VideoPc = ({ data }) => {

    return (
        <div className='video_Pc '>

            <div className='video_match_live_Pc mt-2 mb-1'>
                {data && (
                            <><VideoLivePc data={data}></VideoLivePc></>

                        )}
                     
            </div>

        </div>
    );
}

export default VideoPc;
