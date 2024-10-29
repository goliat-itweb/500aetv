import React, { useState } from 'react';
import Leaderboard from './leaderboard/Leaderboard';
import DropdownForm from './calendar/DropdownForm';
import HomeAway from './homeawaybtn/HomeAway';
import laligalogo from '../../assets/image/laliga.webp'
import bellLarge from '../../assets/image/bellLarge.webp'

import './BangXepHang.css';

const BangXepHang = () => {
    const [selectedSeason, setSelectedSeason] = useState('Chọn Mùa');
    const [selectedActive, setSelectedActtive] = useState('');
    const [selectedChampionship, setSelectedChampionship] = useState('Premier League');
    const [selectedChampionCountry, setSelectedChampionCountry] = useState('Premier League');

    const championshipImages = {
        'Premier League': 'https://img.uniscore.com/football/competition/jednm9whz0ryox8/image',
        'La Liga': laligalogo,
        'Bundesliga': 'https://img.uniscore.com/football/competition/gy0or5jhg6qwzv3/image',
        'Serie A': 'https://img.uniscore.com/football/competition/4zp5rzghp5q82w1/image',
        'Ligue 1': 'https://img.uniscore.com/football/competition/yl5ergphnzr8k0o/image',
    };
    const championshipCountry = {
        'Premier League': 'ENGLAND',
        'La Liga': 'SPAIN',
        'Bundesliga': 'GERMANY',
        'Serie A': 'ITALIA',
        'Ligue 1': 'FRANCE',
    };

    const championships = [
        'Premier League',
        'La Liga',
        'Bundesliga',
        'Serie A',
        'Ligue 1'
    ];

    const handleChampionshipChange = (event) => {
        setSelectedChampionship(event.target.value);
        setSelectedChampionCountry(event.target.value);
        setSelectedSeason('Chọn Mùa');
    };

    return (
        <div className='bangxephang'>
            <div className='container'>
                <div className='container'>
                    <div className='bangxephang_main px-5 pb-5 pt-3'>
                        <div className='d-flex align-items-center justify-content-center main_season_select'>
                            <div className='d-flex align-items-center justify-content-center' style={{ width: '40%' }}>
                                <div className='img_championshop_logo'>
                                    <img src={championshipImages[selectedChampionship]} alt={`${selectedChampionship} Logo`} width='100px' height='100px' />
                                </div>
                                <div className='select_championship'>

                                    <select className='mx-1 priemier_leauge' value="" onChange={handleChampionshipChange}
                                    >
                                        <option value="" disabled hidden></option>
                                        {championships.map((championship, index) => (
                                            <option key={index} value={championship}>
                                                {championship}
                                            </option>
                                        ))}

                                    </select>
                                </div>

                            </div>
                            <div>
                                <h6 className=''>{selectedChampionship} </h6>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='m-0'>{championshipCountry[selectedChampionCountry]}</p>
                                    <DropdownForm
                                        setSelectedActtive={setSelectedActtive}
                                        selectedSeason={selectedSeason}
                                        setSelectedSeason={setSelectedSeason}
                                        selectedChampionship={selectedChampionship}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center bxh_bottom align-items-center bell_bxh'>
                            <div className=' mx-2'>
                                <img src={bellLarge} alt="" />
                            </div>
                            <div className=' mx-2'>
                                <p className='m-0'>Nhận Thông Báo</p>
                                <button>Theo Dõi +</button>
                            </div>
                            <div className='follower  mx-2'>
                                <p className='m-0'>2.9k <span className='color-dark'>người theo dõi</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <HomeAway
                            selectedSeason={selectedSeason}
                            selectedActive={selectedActive}
                            setSelectedActtive={setSelectedActtive}
                            selectedChampionship={selectedChampionship}
                        />
                    </div>
                    <Leaderboard />
                </div>
            </div>
        </div>
    );
}

export default BangXepHang;
