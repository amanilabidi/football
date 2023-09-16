import React from 'react';
import { FaSquare } from 'react-icons/fa';
function StandingsTable({ teams }) {
    const sortTeams = (teams) => {
        return teams.slice().sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points; // Sort by points first
            } else {
                return b.gd - a.gd; // If points are equal, sort by goal difference
            }
        });
    };
    const sortedTeams = sortTeams(teams);
    const getFormIcon = (result) => {
        if (result === 'W') {
            return <FaSquare className='win-icon' />;
        } else if (result === 'L') {
            return <FaSquare className='loss-icon' />;
        } else if (result === 'D') {
            return <FaSquare className='draw-icon' />;
        } else {
            return '';
        }
    };
    
    
    return (
        <div id="standings">
            <table className='standings-table'>
                <thead>
                    <tr className=' table-head'>
                        <th>#</th>
                        <th>GROUP A</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>G</th>
                        <th>GD</th>
                        <th>PTS</th>
                        <th>LAST MATCH</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTeams.map((team, index) => (
                        <tr key={team.name}>
                            <td className={`id-team ${index < 3 ? 'blue-bg' : 'red-bg'}`}>{index + 1}.</td>
                            <td>
                                <div className='team-event'>
                                    <img className="club"
                                        loading="lazy"
                                        src={team.logo}
                                        alt={team.name + " logo"} />
                                    <span className='team-txt'>{team.name}</span>
                                </div>
                            </td>
                            <td>{team.mp}</td>
                            <td>{team.wins}</td>
                            <td>{team.drows}</td>
                            <td>{team.lows}</td>
                            <td>{team.goals}</td>
                            <td>{team.gd}</td>
                            <td>{team.points}</td>
                            <td>{getFormIcon(team.form)}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StandingsTable;
