import React from 'react';
import './SoiKeo.css'
import SoiKeoMatch from './soikeomatch/SoiKeoMatch';
const SoiKeo = () => {
    return (
        <div className='soikeo_main'>
            <div className='container'>
                <div className=' container'>
                    <div className='soikeo_day justify-content-around d-flex py-2 px-2'>
                        <div className='mx-3 soikeo_date'>
                            <p className='m-0'>MON</p>
                            <p className='m-0'>14.08</p>
                        </div>
                        <div className='mx-3'>
                            <p className='m-0'>TUE</p>
                            <p className='m-0'>15.08</p>
                        </div>
                        <div className='mx-3'>
                            <p className='m-0'>WED</p>
                            <p className='m-0'>16.08</p>
                        </div>
                        <div className='mx-3'>
                            <p className='m-0'>THUS</p>
                            <p className='m-0'>17.08</p>
                        </div>
                        <div className='mx-3'>
                            <p className='m-0'>FRI</p>
                            <p className='m-0'>18.08</p>
                        </div>
                        <div className='mx-3'>
                            <p className='m-0'>SAT</p>
                            <p className='m-0'>19.08</p>
                        </div>
                        <div className='mx-3'>
                            <p className='m-0'>SUN</p>
                            <p className='m-0'>20.08</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between px-4 py-2 soikeo_ft'>
                        <div className='d-flex '>
                            <p className='m-0 mx-2'>Time</p>
                            <p className='m-0 mx-2'>Team</p>
                        </div>
                        <div>
                            <p className='m-0'>FT <i className="fa-regular fa-clock"></i></p>

                        </div>
                    </div>
                    <SoiKeoMatch></SoiKeoMatch>
                </div>
            </div>
        </div>
    );
}

export default SoiKeo;
