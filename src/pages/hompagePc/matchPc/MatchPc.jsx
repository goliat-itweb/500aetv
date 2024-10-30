import React from 'react';
import './MatchPc.css'
import MatchVideoPc from '../matchvideoPc/MatchVideoPc';
const MatchPc = ({ data }) => {

    if (data) return (
        <div className='d-flex justify-content-center align-items-center' style={{ margin:' 33px 0 20px 0' }}>
            <div className='match_main_Pc'>
             
                    <MatchVideoPc data={data}></MatchVideoPc>
              
            </div>
        </div>

    );
}

export default MatchPc;
