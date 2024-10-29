import React from 'react';
import useStore from '../../store/useStore';

const HomeAway = ({ selectedSeason, selectedActive, setSelectedActtive, selectedChampionship }) => {
    const setLeaderboardData = useStore((state) => state.setLeaderboardData);
    const baseApiUrl = 'https://api.uniscore.vn/api/v1/unique-tournament/mfiws1aoh0uztg4/season';
    const seasonApiUrls = {
        'Premier League': {
            'Chọn Mùa': `${baseApiUrl}/bm0nxito7wys3t6/standings`,
            '2024-2025': `${baseApiUrl}/bm0nxito7wys3t6/standings`,
            '2023-2024': `${baseApiUrl}/s5ofw4ko0kyn5ek/standings`,
            '2022-2023': `${baseApiUrl}/mfiws1ao23osdxd/standings`,
            '2021-2022': `${baseApiUrl}/jy2us9tolezn7fj/standings`,
            '2020-2021': `${baseApiUrl}/y3d7s6domyhrq93/standings`,
        },

        'La Liga': {
            'Chọn Mùa': `${baseApiUrl}/nkb1x23ow2mse70/standings`,
            '2024-2025': `${baseApiUrl}/nkb1x23ow2mse70/standings`,
            '2023-2024': `${baseApiUrl}/87dyw5ro75gni6u/standings`,
            '2022-2023': `${baseApiUrl}/2es0s3koh6qntnv/standings`,
            '2021-2022': `${baseApiUrl}/nkb1x23olybse70/standings`,
            '2020-2021': `${baseApiUrl}/jy2us9to013n7fj/standings`,
        },

        'Bundesliga': {
            'Chọn Mùa': `${baseApiUrl}/c9dxsq8ol12r5s2/standings`,
            '2024-2025': `${baseApiUrl}/c9dxsq8ol12r5s2/standings`,
            '2023-2024': `${baseApiUrl}/1z88sr5oty3ntsd/standings`,
            '2022-2023': `${baseApiUrl}/neo1xaso8wmr6iv/standings`,
            '2021-2022': `${baseApiUrl}/jy2us9tolyzn7fj/standings`,
            '2020-2021': `${baseApiUrl}/jz5xx7noed0rbib/standings`,
        },

        'Serie A': {
            'Chọn Mùa': `${baseApiUrl}/87dyw5rorvhni6u/standings`,
            '2024-2025': `${baseApiUrl}/87dyw5rorvhni6u/standings`,
            '2023-2024': `${baseApiUrl}/jy2us9to4prn7fj/standings`,
            '2022-2023': `${baseApiUrl}/ym2xwfios7hs006/standings`,
            '2021-2022': `${baseApiUrl}/y3d7s6dol2jrq93/standings`,
            '2020-2021': `${baseApiUrl}/o014smco865s6pk/standings`,
        },

        'Ligue 1': {
            'Chọn Mùa': `${baseApiUrl}/s5ofw4ko1ebn5ek/standings`,
            '2024-2025': `${baseApiUrl}/s5ofw4ko1ebn5ek/standings`,
            '2023-2024': `${baseApiUrl}/2wogs0ko987s1xj/standings`,
            '2022-2023': `${baseApiUrl}/y3d7s6do721rq93/standings`,
            '2021-2022': `${baseApiUrl}/jz5xx7nolyjrbib/standings`,
            '2020-2021': `${baseApiUrl}/neo1xaso7par6iv/standings`,
        }
    };
    const fetchLeaderboardData = async (type) => {
        const apiUrl = `${seasonApiUrls[selectedChampionship][selectedSeason]}/${type}`;
        if (!apiUrl) {
            console.error('No API URL found for the selected season');
            return;
        }
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setLeaderboardData(data.data.standings[0].rows);

        } catch (error) {
            console.error('Error fetching data:', error.message);
            setLeaderboardData(null);
        }
    };
    const handleButtonClick = (type) => {
        setSelectedActtive(type);
        fetchLeaderboardData(type);
    };
    return (
        <div className="text-center btn_rank">
            <button
                className={`mx-2 ${selectedActive === 'total' ? 'active' : ''}`}
                onClick={() => handleButtonClick('total')}
            >
                Tất cả
            </button>
            <button
                className={`mx-2 ${selectedActive === 'home' ? 'active' : ''}`}
                onClick={() => handleButtonClick('home')}
            >
                Sân nhà
            </button>
            <button
                className={`mx-2 ${selectedActive === 'away' ? 'active' : ''}`}
                onClick={() => handleButtonClick('away')}
            >
                Sân khách
            </button>

        </div>
    );
};

export default HomeAway;
