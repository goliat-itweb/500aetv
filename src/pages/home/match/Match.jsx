import React from 'react';
import './Match.css'
import MatchVideo from '../matchvideo/MatchVideo';
const Match = () => {
    return (
        <div className='match_main'>
            <div className='px-3'>
                <div className='match_text text-center'>
                    <p className=''>
                       CẬP NHẬT                      
                            <span style={{ color: 'rgb(255 141 0) ' }}> TRẬN THI ĐẤU HOT</span>
                    </p>
                    {/* <span className="h8">GIẢI ĐẤU VÀ TRẬN ĐẤU SẮP TỚI</span> */}
                </div>
                <MatchVideo></MatchVideo>
            </div>
        </div>
    );
}

export default Match;
