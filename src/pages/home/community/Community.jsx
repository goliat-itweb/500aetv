import React from 'react';
import './Community.css';
import innesta from '../../../assets/image/innesta.webp'
import mainlogo from '../../../assets/image/mainlogo.webp'
import imginnestaandtext from '../../../assets/image/imginnestaandtext.png'

const Community = () => {
    return (
        <div className=' px-3'>
            <div className=' p-1'> 
                   <img width="100%" src={imginnestaandtext} alt="" />
            </div>
            <div className="text-center main_text_community mt-2">
                <h1>CỘNG ĐỒNG <span>ĐAM MÊ</span> </h1>
            </div>
            <div className="d-flex justify-content-between">
                <div className="community_one ">
                    <a href="https://t.me/TIP500AE" className='text-decoration-none text-light'>
                        <div className="community_box_one">
                            <div className="community_color">
                                <h1>KÈO</h1>
                                <h6>EURO TELE</h6>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/500AESHBET/" className='text-decoration-none text-light'>
                        <div className="community_box_two text-center">
                            <h5>KÈO BÓNG</h5>
                            <h5>FACEBOOK</h5>
                        </div>
                    </a>
                </div>
                <div className="community_two">
                    <a href=" https://urlvn.net/dudoannhancd57k" className='text-decoration-none text-light'>
                        <div className="community_box_two  text-center">
                            <h5>DỰ ĐOÁN </h5>
                            <h5>NHẬN QUÀ</h5>
                        </div>
                    </a>
                    <a href=" https://urlvn.net/dudoannhancd57k" className='text-decoration-none text-light'>
                        <div className="community_box_one">
                            <div className="community_color">
                                <h6>KHUYẾN MÃI</h6>
                                <h1>HOT</h1>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Community;
