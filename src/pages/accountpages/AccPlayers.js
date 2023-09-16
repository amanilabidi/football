import React, { useState } from 'react';
import AccSearchBar from './AccSeachBar';
import TeamDetails from './TeamDetails';
import TeamData from './TeamData';
import { FaTrophy, FaTimes, FaStar, FaGreaterThan } from 'react-icons/fa';
import ClubAfricain from '../../images/ca.png';
import esperence from '../../images/est.png';
import etoile from '../../images/ess.png';
import sfax from '../../images/css.png';
import usmo from '../../images/usmo.png';
import usbg from '../../images/usbg.png';
import asm from '../../images/asm.jpg';
import ob from '../../images/ob.jpg';
import cab from '../../images/cab.jpg';
import esm from '../../images/esm.png';
import gafsa from '../../images/gafsa.png';
import soliman from '../../images/soliman.png';
import st from '../../images/st.png';
import ust from '../../images/ust.png';
const AccPlayers = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [showCompetitionOptions, setShowCompetitionOptions] = useState(false);
    const [favoriteCompetitions, setFavoriteCompetitions] = useState([]);
    const [showHiddenElement, setShowHiddenElement] = useState(false);
    const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
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
    const toggleplayersDropdown = () => {
        setTeamDropdownOpen(!teamDropdownOpen);
        setShowOverlay(!showOverlay);
    };
    const closeplayersDropdown = () => {
        setTeamDropdownOpen(false);
        setShowOverlay(false);
    };
    const goalkeepers = [
        {
          id: 1,
          name: ' Mouez Hassen',
          age: '5 mars 1995 (28)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/215677-1686756989.jpg?lm=1',
        },
        {
          id: 2,
          name: 'Ahmed Labidi',
          age: '20 août 2001 (22)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
        },
        {
          id: 3,
          name: 'Noureddine Farhati',
          age: '14 sept. 2000 (22)',
          imageSrc: 'https://static.flashscore.com/res/image/data/lzcXCIhl-2DqfROPP.png',
        },
        {
          id: 4,
          name: 'Oussema Hanzouli',
          age: '28 janv. 2001 (22)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
        },
      ];
      const defenders = [
        {
          id: 1,
          name: 'Skander Labidi',
          age: '13 mai 1999 (24)',
          imageSrc: 'https://static.flashscore.com/res/image/data/rqwP0gXg-Wp1d6Nm0.png',
        },
        {
          id: 2,
          name: 'Toufik Cherifi',
          age: '19 oct. 2001 (21)',
          imageSrc: 'https://static.flashscore.com/res/image/data/0r8UG8Ca-W0VYm24f.png',
        },
        {
          id: 3,
          name: 'Ameur Omrani',
          age: '11 sept. 1996 (26)	',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/295392-1632991373.png?lm=1',
        },
        {
          id: 4,
          name: 'Rami Bedoui',
          age: '28 janv. 2001 (22',
          imageSrc: 'https://static.flashscore.com/res/image/data/nDDg3fcM-KIF6hYme.png',
        },
        {
            id: 5,
            name: 'Noureddine Farhati',
            age: '19 janv. 1990 (33)',
            imageSrc: 'https://static.flashscore.com/res/image/data/lzcXCIhl-2DqfROPP.png',
          },
          {
            id: 6,
            name: 'Mohamed Hamrouni',
            age: '16 juil. 1997 (26)',
            imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
          },
          {
            id: 7,
            name: 'Adem Taous',
            age: '	21 juil. 2000 (23)',
            imageSrc: 'https://static.flashscore.com/res/image/data/lINgk1Fa-4QX5uXAN.png',
          },
          {
              id: 8,
              name: 'Amine Ben Zaghada',
              age: '7 juil. 2001 (22)',
              imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
            },
            {
              id: 9,
              name: 'Hamza Agerbi',
              age: '	21 mars 1991 (32)',
              imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/s_185079_26236_2012_1.jpg?lm=1',
            },
            {
                id: 1,
                name: 'Skander Labidi',
                age: '13 mai 1999 (24)',
                imageSrc: 'https://static.flashscore.com/res/image/data/rqwP0gXg-Wp1d6Nm0.png',
              },
              {
                id: 2,
                name: 'Gaith Zaalouni',
                age: '6 mai 2002 (21)',
                imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
              },
        
      ];
      const mids = [
        {
          id: 1,
          name: ' Ahmed Khalil',
          age: '21 déc. 1994 (28)',
          imageSrc: 'https://static.flashscore.com/res/image/data/t6VIGfzB-fo7pHPqS.png',
        },
        {
          id: 2,
          name: 'Houssem Eddine Souissi',
          age: '20 oct. 1997 (25)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/564524-1619188373.JPG?lm=1',
        },
        {
          id: 3,
          name: 'Khalil Kassab',
          age: '9 janv. 2000 (23)',
          imageSrc: 'https://static.flashscore.com/res/image/data/40CiwcFa-h2CfkGfI.png',
        },
        {
          id: 4,
          name: 'Yahia Mtiri',
          age: '3 nov. 2004 (18)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
        },
        {
            id: 1,
            name: 'Yassine Dridi',
            age: '3 avr. 2003 (20)	',
            imageSrc: 'https://static.flashscore.com/res/image/data/AXwFbkEa-6Lr5whhT.png',
          },
          {
            id: 2,
            name: 'Wissem Ben Yahia',
            age: '9 sept. 1984 (38)',
            imageSrc: 'https://static.flashscore.com/res/image/data/xExc1xf5-dUFrhIAa.png',
          },
          {
            id: 3,
            name: 'Ahmed Hammami',
            age: '20 janv. 1997 (26)',
            imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
          },
          {
            id: 4,
            name: 'Chiheb Labidi',
            age: '1 juin 2001 (22)',
            imageSrc: 'https://static.flashscore.com/res/image/data/8fOv3ZEG-UR7XWlGb.png',
          },
          {
            id: 4,
            name: 'Amadou Sabo',
            age: '30 mai 2000 (23)',
            imageSrc: 'https://static.flashscore.com/res/image/data/rXt3qrCr-jgn9qRa9.png',
          }
      ];
      const wingers = [
        {
          id: 1,
          name: ' Zouhaier Dhouadi',
          age: '1 janv. 1988 (35)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/s_64147_14171_2012_2.jpg?lm=1',
        },
        {
          id: 2,
          name: 'Adem Garreb',
          age: '22 mai 2003 (20)',
          imageSrc: 'https://static.flashscore.com/res/image/data/GECT7NAr-txCBkIdK.png',
        },
        {
          id: 3,
          name: 'Rached Arfaoui',
          age: '7 mars 1996 (27)',
          imageSrc: 'https://static.flashscore.com/res/image/data/CxMPKDBr-tUeqJPBo.png',
        },
        {
          id: 4,
          name: 'Bassem Srarfi',
          age: '25 juin 1997 (26)',
          imageSrc: 'https://static.flashscore.com/res/image/data/xtkhXrh5-2yIbffJr.png',
        },
      ];
      const forwards = [
        {
          id: 1,
          name: ' Hamdi Labidi',
          age: '9 juin 2002 (21)',
          imageSrc: 'https://static.flashscore.com/res/image/data/YV80Bdhl-xQQuHUdf.png',
        },
        {
          id: 2,
          name: 'Youssef Snana',
          age: '	24 mars 2004 (19)',
          imageSrc: 'https://static.flashscore.com/res/image/data/C6FDj6Ea-dQsfkaRn.png',
        },
        {
          id: 3,
          name: 'Mohamed Ali Amri',
          age: '19 mai 1996 (27)',
          imageSrc: 'https://static.flashscore.com/res/image/data/WjzYe2zB-6aesbASt.png',
        },
        {
          id: 4,
          name: 'Alioune Mbaye',
          age: '3 avr. 2002 (21)',
          imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
        },
        {
            id: 5,
            name: '	Kingsley Eduwo  ',
            age: '19 juin 1996 (27)',
            imageSrc: 'https://img.a.transfermarkt.technology/portrait/medium/532477-1503925206.jpg?lm=1',
          },
      ];
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
                <div className='title-container'>
                    <p className="league-link">
                        Tunisian Professional League 1:2023/2024 <br />
                        <a
                            href="https://codepen.io/grohit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="season-link"
                        >
                            Click A Team To Discover The Roster.
                        </a>
                    </p>

                </div>
                <div className='cards'>
                    <div className="card">
                        <img src={ClubAfricain} alt="Avatar" style={{ width: '100%' }} onClick={toggleplayersDropdown} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Club Africain</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={esperence} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>Espérance Tunis</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={etoile} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Etoile Sahel</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={sfax} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>CS Sfaxien</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={usmo} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>Monastir</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={usbg} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Ben Guerdane</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={asm} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>AS Marsa</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ob} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Olympique Beja</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cab} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>Bizertin</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={esm} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>Metlaoui</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={gafsa} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Gafsa</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={soliman} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Soliman</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={st} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP A</b></h4>
                            <p>Stade Tunisien</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ust} alt="Avatar" style={{ width: '100%' }} />
                        <div className="card-container">
                            <h4><b>GROUP B</b></h4>
                            <p>US Tataouine</p>
                        </div>
                    </div>
                    <div className="card">
                    </div>
                </div>
            </div>
            {showOverlay && (
                <div className="overlay" onClick={closeplayersDropdown}>

                    <ul className="team-dropdown">
                        <div className='head-fav-team'>
                            <div className='list-players-head'>
                                <div className='fav-team-element-image'>
                                    <img src={ClubAfricain} alt="CA" className='fav-team-image' />
                                </div>
                                <h4>Club Africain</h4>
                            </div>

                            <FaTimes className='acc-icon-fav-team' onClick={closeTeamDropdown} />
                        </div>
                        <div className='defenseurs'>
                            <div className='defenseurs-head-title'>
                                <h4>Goalkeepers (GK):</h4>
                            </div>
                            <ul className='defenseurs-container'>
                                {goalkeepers.map((user) => (
                                    <li key={user.id} style={{ '--i': user.id }}>
                                        <img src={user.imageSrc} alt="user image" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <p>{user.age}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='defenseurs'>
                            <div className='defenseurs-head-title'>
                                <h4>Defenders (DF):</h4>
                            </div>
                            <ul className='defenseurs-container'>
                                {defenders.map((user) => (
                                    <li key={user.id} style={{ '--i': user.id }}>
                                        <img src={user.imageSrc} alt="user image" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <p>{user.age}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='milieux'>
                            <div className='defenseurs-head-title'>
                                <h4>Midfielders (Mids):</h4>
                            </div>
                            <ul className='defenseurs-container'>
                                {mids.map((user) => (
                                    <li key={user.id} style={{ '--i': user.id }}>
                                        <img src={user.imageSrc} alt="user image" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <p>{user.age}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='milieux'>
                            <div className='defenseurs-head-title'>
                                <h4>wingers:</h4>
                            </div>
                            <ul className='defenseurs-container'>
                                {wingers.map((user) => (
                                    <li key={user.id} style={{ '--i': user.id }}>
                                        <img src={user.imageSrc} alt="user image" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <p>{user.age}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='milieux'>
                            <div className='defenseurs-head-title'>
                                <h4>Forwards (Attakers):</h4>
                            </div>
                            <ul className='defenseurs-container'>
                                {forwards.map((user) => (
                                    <li key={user.id} style={{ '--i': user.id }}>
                                        <img src={user.imageSrc} alt="user image" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <p>{user.age}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ul>

                </div>



            )}

            <div className='acc-part-foot'>
                <p>Help: Find Ligue Professionnelle 1 2023/2024 fixtures, tomorrow's matches and all of the current season's Ligue Professionnelle 1
                    2023/2024 schedule. Flashscore.com provides all Ligue Professionnelle 1 2023/2024 fixtures, live scores and final results with
                    current standings, head-to-head stats and odds comparison. See also current season's Ligue Professionnelle 1 results and results
                    archive.</p>
            </div>

        </div>

    );
};

export default AccPlayers;
