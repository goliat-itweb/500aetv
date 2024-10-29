import React from 'react';
import './Leaderboard.css';
import useStore from '../../store/useStore';

const Leaderboard = () => {
    const leaderboardData = useStore((state) => state.leaderboardData || []);

    if (!Array.isArray(leaderboardData) || leaderboardData.length === 0) {
        return <div className="text-center select_season">
            <h3>VUI LÒNG CHỌN MÙA GIẢI</h3>
        </div>;
    }

    return (
        <div className="leaderboard-container">
            <table className="leaderboard-table text-center">
                <thead>
                    <tr>
                        <th>Đội bóng</th>
                        <th>TR</th>
                        <th>HS</th>
                        <th>T</th>
                        <th>H</th>
                        <th>L</th>
                        <th>Điểm</th>
                        <th>BT</th>
                        <th>BB</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((team, index) => (
                        <tr key={index}>
                            <td className="team-info">
                                <span className={`rank-circle rank-${team.position}`}>{team.position}</span>
                                <img src={team.team.logo} alt={`${team.team.name} Logo`} className="team-logo" />
                                <span className="team-name">{team.team.name}</span>
                            </td>
                            <td>{team.matches}</td>
                            <td>{team.scoresDiff}</td>
                            <td>{team.wins}</td>
                            <td>{team.draws}</td>
                            <td>{team.losses}</td>
                            <td>{team.points}</td>
                            <td>{team.scoresFor}</td>
                            <td>{team.scoresAgainst}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
