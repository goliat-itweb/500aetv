import React from 'react';
import './Video.css';
import VideoLive from './VideoLive';
const Video = ({ data }) => {

    return (
        <div className='video'>
            <div className='text-center video_livestream mt-2'>
                {/* <img className='imgbongdabtn' src={btnbongda} width='100%' alt="" /> */}
                <div className='video_stream '>
                   
                    <div className='video_match_live '>
                        {data && (
                           <><VideoLive data={data}></VideoLive></> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
   


export default Video;
