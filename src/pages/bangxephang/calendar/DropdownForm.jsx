import React, { useState } from 'react';
import './DropdownForm.css';
import useStore from '../../store/useStore';
import dropdown from '../../../assets/image/dropdown.webp'
import carlendar from '../../../assets/image/carlendar.webp'
const DropdownForm = ({ selectedSeason, setSelectedSeason, setSelectedActtive, selectedChampionship }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setLeaderboardData = useStore((state) => state.setLeaderboardData);

  const baseApiUrl = 'https://api.uniscore.vn/api/v1/unique-tournament/mfiws1aoh0uztg4/season';

  const seasonApiUrls = {
    'Premier League': {
      'Chọn Mùa': `${baseApiUrl}/bm0nxito7wys3t6/standings/total`,
      '2024-2025': `${baseApiUrl}/bm0nxito7wys3t6/standings/total`,
      '2023-2024': `${baseApiUrl}/s5ofw4ko0kyn5ek/standings/total`,
      '2022-2023': `${baseApiUrl}/mfiws1ao23osdxd/standings/total`,
      '2021-2022': `${baseApiUrl}/jy2us9tolezn7fj/standings/total`,
      '2020-2021': `${baseApiUrl}/y3d7s6domyhrq93/standings/total`,
    },

    'La Liga': {
      'Chọn Mùa': `${baseApiUrl}/nkb1x23ow2mse70/standings/total`,
      '2024-2025': `${baseApiUrl}/nkb1x23ow2mse70/standings/total`,
      '2023-2024': `${baseApiUrl}/87dyw5ro75gni6u/standings/total`,
      '2022-2023': `${baseApiUrl}/2es0s3koh6qntnv/standings/total`,
      '2021-2022': `${baseApiUrl}/nkb1x23olybse70/standings/total`,
      '2020-2021': `${baseApiUrl}/jy2us9to013n7fj/standings/total`,
    },

    'Bundesliga': {
      'Chọn Mùa': `${baseApiUrl}/c9dxsq8ol12r5s2/standings/total`,
      '2024-2025': `${baseApiUrl}/c9dxsq8ol12r5s2/standings/total`,
      '2023-2024': `${baseApiUrl}/1z88sr5oty3ntsd/standings/total`,
      '2022-2023': `${baseApiUrl}/neo1xaso8wmr6iv/standings/total`,
      '2021-2022': `${baseApiUrl}/jy2us9tolyzn7fj/standings/total`,
      '2020-2021': `${baseApiUrl}/jz5xx7noed0rbib/standings/total`,
    },

    'Serie A': {
      'Chọn Mùa': `${baseApiUrl}/87dyw5rorvhni6u/standings/total`,
      '2024-2025': `${baseApiUrl}/87dyw5rorvhni6u/standings/total`,
      '2023-2024': `${baseApiUrl}/jy2us9to4prn7fj/standings/total`,
      '2022-2023': `${baseApiUrl}/ym2xwfios7hs006/standings/total`,
      '2021-2022': `${baseApiUrl}/y3d7s6dol2jrq93/standings/total`,
      '2020-2021': `${baseApiUrl}/o014smco865s6pk/standings/total`,
    },

    'Ligue 1': {
      'Chọn Mùa': `${baseApiUrl}/s5ofw4ko1ebn5ek/standings/total`,
      '2024-2025': `${baseApiUrl}/s5ofw4ko1ebn5ek/standings/total`,
      '2023-2024': `${baseApiUrl}/2wogs0ko987s1xj/standings/total`,
      '2022-2023': `${baseApiUrl}/y3d7s6do721rq93/standings/total`,
      '2021-2022': `${baseApiUrl}/jz5xx7nolyjrbib/standings/total`,
      '2020-2021': `${baseApiUrl}/neo1xaso7par6iv/standings/total`,
    }
  };

  const handleSelectChange = async (event) => {

    const selectedValue = event.target.value;
    setSelectedSeason(selectedValue);
    setSelectedActtive('total');
    setLoading(true);
    setError(null);

    const apiUrl = seasonApiUrls[selectedChampionship][selectedValue];
   
    if (!apiUrl) {
      setError('Invalid season selected');
      setLoading(false);
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
      setError(error.message);
      setLeaderboardData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <label htmlFor="season-dropdown" className="dropdown-label d-flex">
       <div>
       <img src={carlendar} width='100%' alt="" />
       </div>
        <select
          id="season-dropdown"
          className="dropdown"
          value={selectedSeason}
          onChange={handleSelectChange}
        >
          {Object.keys(seasonApiUrls[selectedChampionship]).map((season) => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
          <div>
          <img src={dropdown}  width='100%' alt="" />
          </div>
      </label>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DropdownForm;
