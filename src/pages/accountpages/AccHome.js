import React, { useState } from 'react';
import AccSearchBar from './AccSeachBar';
import TeamDetails from './TeamDetails';
import TeamData from './TeamData';
import { FaTrophy, FaTimes, FaStar, FaGreaterThan } from 'react-icons/fa';
import flagtun from '../../images/flagtun.png';
import ligImage from '../../images/lig.png';
import tun from '../../images/tun.png';
const AccHome = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showCompetitionOptions, setShowCompetitionOptions] = useState(false);
  const [favoriteCompetitions, setFavoriteCompetitions] = useState([]);
  const [showHiddenElement, setShowHiddenElement] = useState(false);
 
  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleCompetitionButtonClick = () => {
    setShowCompetitionOptions(!showCompetitionOptions);
  };

  const closeTeamDropdown = () => {
    setShowCompetitionOptions(false);
  };

  const toggleFavoriteCompetition = (competitionName) => {
    setFavoriteCompetitions(prevFavorites => [...prevFavorites, competitionName]);
  };

  const handleDeleteCompetition = (competitionName) => {
    setFavoriteCompetitions(prevFavorites =>
      prevFavorites.filter(competition => competition !== competitionName)
    );
  };
  const handleShowMoreClick = () => {
    setShowHiddenElement(true);
};

  return (
    <div className='accHome'>
      <div className='acc-part'>
        <div className='acc-part-head'>
          <button onClick={handleCompetitionButtonClick} className='compition-res'>
            <FaTrophy className="cup-icon" />
          </button>
          <div className='search-element'>
            <AccSearchBar teams={TeamData} onTeamSelect={handleTeamSelect} />
            <TeamDetails selectedTeam={selectedTeam} />
          </div>
          <button onClick={handleCompetitionButtonClick} className='compition'>
            <FaTrophy className="cup-icon" />
            Choose Competition
          </button>

        </div>
        {showCompetitionOptions && (
          <div className="competition-options">
            <FaTimes className='acc-icon-head' onClick={closeTeamDropdown} />
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                toggleFavoriteCompetition('Tunisian Professional League 1');
              }}
            >
              <span
                className={`favorite-icon ${favoriteCompetitions.includes('Tunisian Professional League 1') ? 'favorite' : ''}`}
              >
                <FaStar className='icon-comp' />
              </span>
              Tunisian Professional League 1
            </a>
            <a href='#'
              onClick={(event) => {
                event.preventDefault();
                toggleFavoriteCompetition('Tunisian Cup');
              }}
            >
              <span
                className={`favorite-icon ${favoriteCompetitions.includes('Tunisian Cup') ? 'favorite' : ''}`}
              >
                <FaStar className='icon-comp' />
              </span>
              Tunisian Cup
            </a>
          </div>
        )}

        {favoriteCompetitions.length > 0 ? (
          <div className='prof-league'>
            <h3>Favorites</h3>
            {favoriteCompetitions.map(competition => (
              <div key={competition} className='favorite-option'>
                {competition}
                <FaTimes className='acc-icon-head' onClick={() => handleDeleteCompetition(competition)} />
              </div>
            ))}
          </div>
        ) : (
          <div className='prof-league'>
            <p>The favorite zone is empty</p>
          </div>
        )}
      </div>
      <div className='acc-part'>
        <div className='home-menu1'>
          <div className='football-icon'><p>⚽</p></div>
          <div className=''><p className='part1-txt'>FOOTBALL <FaGreaterThan className='greater-than-icon' /> </p></div>
          <div className='tun'>
            <img src={flagtun} alt="tunisian flag" className='flag-home' />
            <p p className='part1-txt'>TUNISIA</p>
          </div>
        </div>
        <div className='home-menu2'>
          <div className='flag-container'>
            <div className='league-img'>
              <img src={ligImage} alt="tunisian league" className='tunisian-league' />
            </div>

            <div className='prof'>
              <p className='prof-txt-acc'>Professional League 1 ✩</p>
              <p className='prof-date-acc'>2023/2024</p>
            </div>

          </div>
        </div>
        <div className='home-bar'>
          <ul>
            <li><a href="http://localhost:3000/Account" className='first'>SUMMARY</a></li>
            <li><a href="/news" >NEWS</a></li>
            <li><a href="/results" >RESULTS</a></li>
            <li><a href="/fixtures" >FIXTURES</a></li>
            <li><a href="/standings" >STANDINGS</a></li>
            <li><a href="/archive" >ARCHIVE</a></li>
          </ul>
        </div>
      </div>
      <div className='acc-part'>
        <div className='title-element'>
          <h3>Latest Scores</h3>
        </div>
        <div className='tunisia'>
          <div className='tun'>
            <img src={tun} alt="tunisian flag" className='flag-home' />
            <p> TUNISIA : Professional League 1</p>
          </div>
          <div>
            <a href='#'>Standings</a>
          </div>
        </div>
        <div className='tunisia'>
          <h5>ROUND2</h5>
        </div>

        <div className='dmatches'>
          <div className='event-date'>
            <span>27.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fZvCLvAN-ltB92yKu.png" />
              <span className='team-txt'>AS Marsa</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png" />
              <span className='team-txt'>CS Sfaxien</span>
            </div>
          </div>
          <div className='score'>
            <span>0</span>
            <span>1</span>
          </div>
          <div className='buts'>
            <span>(0)</span>
            <span>(1)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>27.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/xbeeIiT0-ltB92yKu.png" />
              <span className='team-txt'>Bizertin</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/pUVUjHjC-ltB92yKu.png" />
              <span className='team-txt'>Monastir</span>
            </div>
          </div>
          <div className='score'>
            <span>0</span>
            <span>2</span>
          </div>
          <div className='buts'>
            <span>(0)</span>
            <span>(1)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>27.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png" />
              <span className='team-txt'>US Tataouine</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
              <span className='team-txt'>Esperance Tunis</span>
            </div>
          </div>
          <div className='score'>
            <span>1</span>
            <span>1</span>
          </div>
          <div className='buts'>
            <span>(0)</span>
            <span>(1)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>26.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img
                className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png"
                alt="Home Team Logo"
              />
              <span className='team-txt'>Club Africain</span>
            </div>
            <div className='team-event'>
              <img
                className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/YugLHXBN-ltB92yKu.png"
                alt="Away Team Logo"
              />
              <span className='team-txt'>Gafsa</span>
            </div>
          </div>
          <div className='score'>
            <span>0</span>
            <span>0</span>
          </div>
          <div className='buts'>
            <span>(0)</span>
            <span>(0)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='tunisia'>
          <h5>ROUND1</h5>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>23.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fHCZTY7k-ltB92yKu.png" />
              <span className='team-txt'>Olympique Beja</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
              <span className='team-txt'>Etoile Sahel</span>
            </div>
          </div>
          <div className='score'>
            <span>2</span>
            <span>1</span>
          </div>
          <div className='buts'>
            <span>(1)</span>
            <span>(0)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>20.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png" />
              <span className='team-txt'>CS Sfaxien</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/xbeeIiT0-ltB92yKu.png" />
              <span className='team-txt'>Bizertin 🟥</span>
            </div>
          </div>
          <div className='score'>
            <span>2</span>
            <span>0</span>
          </div>
          <div className='buts'>
            <span>(1)</span>
            <span>(0)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>20.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/hjsxnmgT-ltB92yKu.png" />
              <span className='team-txt'>Metlaoui</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png" />
              <span className='team-txt'>US Tataouine</span>
            </div>
          </div>
          <div className='score'>
            <span>1</span>
            <span>0</span>
          </div>
          <div className='buts'>
            <span>(0)</span>
            <span>(0)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>19.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
              <span className='team-txt'>Esperance Tunis</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fZvCLvAN-ltB92yKu.png" />
              <span className='team-txt'>AS Marsa</span>
            </div>
          </div>
          <div className='score'>
            <span>1</span>
            <span>0</span>
          </div>
          <div className='buts'>
            <span>(1)</span>
            <span>(0)</span>
          </div>
          <div className='space'></div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>19.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/EN7rETRq-ltB92yKu.png" />
              <span className='team-txt'>Soliman</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png" />
              <span className='team-txt'>Stade Tunisien</span>
            </div>
          </div>
          <div className='score'>
            <span>1</span>
            <span>2</span>
          </div>
          <div className='buts'>
            <span>(1)</span>
            <span>(1)</span>
          </div>
          <div className='space'></div>
        </div>
      </div>
      <div className='acc-part'>
        <div className='title-element'>
          <h3>Scheduled</h3>
        </div>
        <div className='tunisia'>
          <div className='tun'>
            <img src={tun} alt="tunisian flag" className='flag-home' />
            <p> TUNISIA : Professional League 1</p>
          </div>
          <div>
            <a href='#'>Standings</a>
          </div>
        </div>
        <div className='tunisia'>
          <h5>ROUND2</h5>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>29.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
              <span className='team-txt'>Etoile Sahel</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/xriYShU0-ltB92yKu.png" />
              <span className='team-txt'>Ben Guerdane</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>

        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>19.08.</span>
            <span className='event-time'> 16:30</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png" />
              <span className='team-txt'>Stade Tunisien</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fHCZTY7k-ltB92yKu.png" />
              <span className='team-txt'>Olympique Beja</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='tunisia'>
          <h5>ROUND3</h5>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>02.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/xriYShU0-ltB92yKu.png" />
              <span className='team-txt'>Ben Guerdane</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png" />
              <span className='team-txt'>Stade Tunisien</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>02.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/YugLHXBN-ltB92yKu.png" />
              <span className='team-txt'>Gafsa</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
              <span className='team-txt'>Etoile Sahel</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>02.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fHCZTY7k-ltB92yKu.png" />
              <span className='team-txt'>Olympique Beja</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/EN7rETRq-ltB92yKu.png" />
              <span className='team-txt'>Soliman</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>03.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png" />
              <span className='team-txt'>CS Sfaxien</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png" />
              <span className='team-txt'>US Tataouine</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>03.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
              <span className='team-txt'>Esperance Tunis</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/hjsxnmgT-ltB92yKu.png" />
              <span className='team-txt'>Metlaoui</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>03.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/pUVUjHjC-ltB92yKu.png" />
              <span className='team-txt'>Monastir</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fZvCLvAN-ltB92yKu.png" />
              <span className='team-txt'>AS Marsa</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='tunisia'>
          <h5>ROUND4</h5>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>16.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/fZvCLvAN-ltB92yKu.png" />
              <span className='team-txt'>AS Marsa</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/xbeeIiT0-ltB92yKu.png" />
              <span className='team-txt'>Bizertin</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>16.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
              <span className='team-txt'>Etoile Sahel</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png" />
              <span className='team-txt'>Club Africain</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>16.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/hjsxnmgT-ltB92yKu.png" />
              <span className='team-txt'>Metlaoui</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png" />
              <span className='team-txt'>CS Sfaxien</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>16.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/EN7rETRq-ltB92yKu.png" />
              <span className='team-txt'>Soliman</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/xriYShU0-ltB92yKu.png" />
              <span className='team-txt'>Ben Guerdane</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>16.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png" />
              <span className='team-txt'>Stade Tunisien</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/YugLHXBN-ltB92yKu.png" />
              <span className='team-txt'>Gafsa</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className='dmatches'>
          <div className='event-date'>
            <span>16.09.</span>
            <span className='event-time'> 16:00</span>
          </div>
          <div className='teams-event'>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png" />
              <span className='team-txt'>US Tataouine</span>
            </div>
            <div className='team-event'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/pUVUjHjC-ltB92yKu.png" />
              <span className='team-txt'>Monastir</span>
            </div>
          </div>
          <div className='score'>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
        <div className="hidden">

          <a href="#" onClick={handleShowMoreClick}>
            Show more matches
          </a>
        </div>
        {showHiddenElement && (
          <div className="hidden-element">
            <div className='tunisia'>
              <h5>ROUND5</h5>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>23.09.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/xriYShU0-ltB92yKu.png" />
                  <span className='team-txt'>Ben Guerdane</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/fHCZTY7k-ltB92yKu.png" />
                  <span className='team-txt'>Olympique Beja</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>23.09.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/xbeeIiT0-ltB92yKu.png" />
                  <span className='team-txt'>Bizertin</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png" />
                  <span className='team-txt'>US Tataouine</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>23.09.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png" />
                  <span className='team-txt'>Club Africain</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png" />
                  <span className='team-txt'>Stade Tunisien</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>23.09.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png" />
                  <span className='team-txt'>CS Sfaxien</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                  <span className='team-txt'>Esperance Tunis</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>23.09.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/YugLHXBN-ltB92yKu.png" />
                  <span className='team-txt'>Gafsa</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/EN7rETRq-ltB92yKu.png" />
                  <span className='team-txt'>Soliman</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>23.09.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/pUVUjHjC-ltB92yKu.png" />
                  <span className='team-txt'>Monastir</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/hjsxnmgT-ltB92yKu.png" />
                  <span className='team-txt'>Metlaoui</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='tunisia'>
              <h5>ROUND6</h5>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>07.10.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                  <span className='team-txt'>Esperance Tunis</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/pUVUjHjC-ltB92yKu.png" />
                  <span className='team-txt'>Monastir</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>07.10.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/hjsxnmgT-ltB92yKu.png" />
                  <span className='team-txt'>Metlaoui</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/xbeeIiT0-ltB92yKu.png" />
                  <span className='team-txt'>Bizertin</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>07.10.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/fHCZTY7k-ltB92yKu.png" />
                  <span className='team-txt'>Olympique Beja</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/YugLHXBN-ltB92yKu.png" />
                  <span className='team-txt'>Gafsa</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>07.10.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/EN7rETRq-ltB92yKu.png" />
                  <span className='team-txt'>Soliman</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png" />
                  <span className='team-txt'>Club Africain</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>07.10.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png" />
                  <span className='team-txt'>Stade Tunisien</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
                  <span className='team-txt'>Etoile Sahel</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
            <div className='dmatches'>
              <div className='event-date'>
                <span>07.10.</span>
                <span className='event-time'> 16:00</span>
              </div>
              <div className='teams-event'>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png" />
                  <span className='team-txt'>US Tataouine</span>
                </div>
                <div className='team-event'>
                  <img className="club"
                    loading="lazy"
                    src="https://static.flashscore.com/res/image/data/fZvCLvAN-ltB92yKu.png" />
                  <span className='team-txt'>AS Marsa</span>
                </div>
              </div>
              <div className='score'>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='acc-part-foot'>
        <p>Help: Find Ligue Professionnelle 1 2023/2024 fixtures, tomorrow's matches and all of the current season's Ligue Professionnelle 1
          2023/2024 schedule. Flashscore.com provides all Ligue Professionnelle 1 2023/2024 fixtures, live scores and final results with
          current standings, head-to-head stats and odds comparison. See also current season's Ligue Professionnelle 1 results and results
          archive.</p>
      </div>
     
    </div>

  );
};

export default AccHome;
