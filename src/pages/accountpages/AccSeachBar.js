import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const AccSearchBar = ({ teams, onTeamSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleInputChange = (event) => {
        const inputTerm = event.target.value;
        setSearchTerm(inputTerm);
        setShowSuggestions(inputTerm.length > 0);
    };


    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-bar-container">
            {/* Input field for searching teams */}
            <div className='search-space'>
            <input
                type="text"
                placeholder="Search for a team..."
                value={searchTerm}
                onChange={handleInputChange}
                className='search-input'
            />
            <button className="search-button">
                <FaSearch />
            </button>
            </div>
           
            {showSuggestions && (
                <ul className="suggestions-list">
                    {/* Display filtered teams as suggestions */}
                    {filteredTeams.map((team) => (
                        <li
                            key={team.id}
                            onClick={() => onTeamSelect(team)}
                            className='filtered-team'
                        >
                            {team.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AccSearchBar;
