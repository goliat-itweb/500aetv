import React from 'react';
import './Story.css'
import largeLogo from '../../../assets/image/mainlogo.webp'
const Story = () => {
    return (
        <div className='text-center mt-5 story_main mb-5'>
            <img src={largeLogo} width='50%' alt="" />
            <h1>VỀ 500AE LIVE</h1>
            <p className='story_main_text'>Câu chuyện về thương hiệu</p>
            <h3>500AE Live là trang web hướng tới cộng đồng đam mê thể thao cung cấp hàng ngàn giải đấu xuyên suốt 24h</h3>
            <a href="https://500ae88.blog/topnhacai/">
                <button>
                    <p className='mb-2  ms-2'>TÌM HIỂU THÊM
                        <i className="ms-4 fa-solid fa-arrow-right">
                        </i>
                    </p>
                </button>
            </a>
        </div>
    );
}

export default Story;
