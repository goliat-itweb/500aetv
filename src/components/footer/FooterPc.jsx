import React, { useState, useEffect } from 'react';
import './FooterPc.css';
import okvip2 from '../../assets/image/okvip.png';
import shbet from '../../assets/image/shbet.webp';
import payment from '../../assets/image/payment.webp';
import newlogo from '../../assets/image/newlogo.webp';
import beware from '../../assets/image/beware.png';    

const FooterPc = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Render the footer for larger screens */}
            {!isMobile && (
                <footer className="footer">
              
                    <div className="footer-container">
                        <div className="partners  text-center">
                            <div className="partners-logos">
                                <img src={okvip2} alt="OKVIP" width="150%" />
                                <p className='mt-2 text-start'>
                                    500AE - nền tảng giải trí chuyên nghiệp chất lượng cao, đạt chỉ tiêu kiểm định và được cấp phép bởi chính phủ Philippines. Nổi bật với kho trò chơi đa dạng, khuyến mãi hấp dẫn, thanh toán siêu tốc, hỗ trợ thành viên tận tâm, chuyên nghiệp...
                                </p>
                            </div>
                        </div>

                        <div className="brand-logo text-center" >
                            <img src={newlogo} alt="500AE Logo" width="50%" />
                        </div>

                        <div className="payment-methods d-flex justify-content-center align-items-start">
                            <div className="payment-icons">
                                <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                                <img src={payment} alt="Payment Method 1" />                           
                                <h4 className='game-aware mt-3'>PHƯƠNG THỨC THANH TOÁN</h4>
                                <img src={beware} alt="Payment Method 1" className="game-aware"/>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links">
                        <a href="#">VỀ CHÚNG TÔI</a> |
                        <a href="#">ĐIỀU KHOẢN DỊCH VỤ</a> |
                        <a href="#">CHÍNH SÁCH BẢO MẬT</a> |
                        <a href="#">LIÊN HỆ</a> |
                        <a href="#">BẢN QUYỀN</a> |
                        <a href="#">MIỄN TRỪ TRÁCH NHIỆM</a>
                    </div>
                </footer>
            )}

            {isMobile && (
                <footer className="footer mb-5">
                    <div className="footer-container">
                        <div className="partners">
                            <div className="partners-logos">
                                <div className='d-flex align-items-start'>
                                    <div style={{ width: "50%" }}>
                                        <img src={okvip2} alt="" />
                                    </div>
                                    <div className="brand-logo text-center">
                                        <img src={newlogo} alt="500AE Logo" width="100%" />
                                    </div>
                                </div>
                                <p className='my-1'>
                                    500AE - nền tảng giải trí chuyên nghiệp chất lượng cao, đạt chỉ tiêu kiểm định và được cấp phép bởi chính phủ Philippines. Nổi bật với kho trò chơi đa dạng, khuyến mãi hấp dẫn, thanh toán siêu tốc, hỗ trợ thành viên tận tâm, chuyên nghiệp...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links">
                        <a href="#">VỀ CHÚNG TÔI</a> |
                        <a href="#">ĐIỀU KHOẢN DỊCH VỤ</a> |
                        <a href="#">CHÍNH SÁCH BẢO MẬT</a> |
                        <a href="#">LIÊN HỆ</a> |
                        <a href="#">BẢN QUYỀN</a> |
                        <a href="#">MIỄN TRỪ TRÁCH NHIỆM</a>
                    </div>
                </footer>
            )}
        </>
    );
};

export default FooterPc;
