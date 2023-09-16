import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaHome, FaFutbol, FaUsers, FaTable, FaNewspaper, FaCog, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import ClubAfricain from '../images/ca.png';
import esperence from '../images/est.png';
import etoile from '../images/ess.png';
import sfax from '../images/css.png';
import usmo from '../images/usmo.png';
import usbg from '../images/usbg.png';
import asm from '../images/asm.jpg';
import ob from '../images/ob.jpg';
import cab from '../images/cab.jpg';
import esm from '../images/esm.png';
import gafsa from '../images/gafsa.png';
import st from '../images/st.png';
import ust from '../images/ust.png';
import soliman from '../images/soliman.png';
import jsk from '../images/jsk.png';
import ASR from '../images/asr.jpg';
import esh from '../images/esh.png';
import csh from '../images/csh.jfif';
import esz from '../images/esz.png';
import sg from '../images/sg.jfif';
import asg from '../images/asg.png';
const AccNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleTeamDropdown = () => {
        setTeamDropdownOpen(!teamDropdownOpen);
        setShowOverlay(!showOverlay);
    };
    const closeTeamDropdown = () => {
        setTeamDropdownOpen(false);
        setShowOverlay(false);
    };
    const handleTeamClick = (teamName) => {
        setSelectedTeam(teamName);
        localStorage.setItem('favoriteTeam', teamName);
        closeTeamDropdown();
    };
    const [activeItem, setActiveItem] = useState('Home'); 
   
    const handleMenuItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className='account'>
            <div className='accnavbar'>
                <ul className="account-navbar">
                    <li>
                        <a href="#" onClick={toggleMenu} >
                            {menuOpen ? <FaTimes className='acc-icon' /> : <FaBars className='acc-icon' />}
                        </a>

                    </li>
                    <li>
                        <h3 >Welcome To Your Account</h3>
                    </li>
                    <li>
                        {selectedTeam ? (
                            <h3 className='fav-team'>{selectedTeam}</h3>
                        ) : (
                            <a href='#' className='favteam' onClick={toggleTeamDropdown}><h3>Choose Your Favourite Team</h3></a>
                        )}

                        {showOverlay && (
                            <div className="overlay" onClick={closeTeamDropdown}>
                                <ul className="team-dropdown">
                                    <div className='head-fav-team'>
                                        <h4>Choose One Team</h4>
                                        <FaTimes className='acc-icon-fav-team' onClick={closeTeamDropdown} />
                                    </div>

                                    <li><a href="#" onClick={() => handleTeamClick('Club Africain')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={ClubAfricain} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Club Africain</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Espérance Tunis')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={esperence} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Espérance Tunis</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Etoile Sahel')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={etoile} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Etoile Sahel</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('CS Sfaxien')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={sfax} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>CS Sfaxien</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Monastir')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={usmo} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Monastir</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Olympique Beja')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={ob} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Olympique Beja</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Gafsa')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={gafsa} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Club Africain</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Ben Guerdane')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={usbg} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Ben Guerdane</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Bizertin')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={cab} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Bizertin</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Metlaoui')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={esm} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Metlaoui</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('AS Marsa')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={asm} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>AS Marsa</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Stade Tunisien')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={st} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Stade Tunisien</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('US Tataouine')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={ust} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>US Tataouine</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Soliman')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={soliman} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Soliman</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('JS Kairouanaise')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={jsk} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>JS Kairouanaise</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('AS REJICHE')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={ASR} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>AS REJICHE</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('ES HAMMAM-SOUSSE')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={esh} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>ES HAMMAM-SOUSSE</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('CS Hammem Lif')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={csh} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>CS Hammem Lif</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('ES ZARZIS')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={esz} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Club Africain</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Stade Gabesien')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={sg} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>Stade Gabesien</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('AS Gabès')} className='fav-team-element'><div className='teams-acc'>
                                        <div className='fav-team-element-image'>
                                            <img src={asg} alt="CA" className='fav-team-image' />
                                        </div>
                                        <h4>AS Gabès</h4></div>
                                    </a></li>

                                </ul>

                            </div>



                        )}
                    </li>
                </ul>
                <ul className="account-navbar-res">
                    <div className='account-navbar-res-1'>
                        <li>
                            <a href="#" onClick={toggleMenu} >
                                {menuOpen ? <FaTimes className='acc-icon' /> : <FaBars className='acc-icon' />}
                            </a>

                        </li>
                        <li>
                            <h3 >Welcome To Your Account</h3>
                        </li>
                    </div>
                    <div className='account-navbar-res-2'>
                        <li>
                            {selectedTeam ? (
                                <h3 className='fav-team'>{selectedTeam}</h3>
                            ) : (
                                <a href='#' className='favteam' onClick={toggleTeamDropdown}><h3>Choose Your Favourite Team</h3></a>
                            )}
                            {teamDropdownOpen && (
                                <ul className="team-dropdown">
                                    <FaTimes className='acc-icon' onClick={closeTeamDropdown} />
                                    <li><a href="#" onClick={() => handleTeamClick('Club Africain')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={ClubAfricain} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Club Africain</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Espérance Tunis')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={esperence} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Espérance Tunis</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Etoile Sahel')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={etoile} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Etoile Sahel</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('CS Sfaxien')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={sfax} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>CS Sfaxien</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Monastir')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={usmo} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Club Africain</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Olympique Beja')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={ob} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Olympique Beja</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Gafsa')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={gafsa} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Club Africain</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Ben Guerdane')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={usbg} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Ben Guerdane</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Bizertin')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={cab} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Bizertin</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Metlaoui')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={esm} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Metlaoui</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('AS Marsa')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={asm} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>AS Marsa</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Stade Tunisien')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={st} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Stade Tunisien</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('US Tataouine')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={ust} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>US Tataouine</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Soliman')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={soliman} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Soliman</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('JS Kairouanaise')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={jsk} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>JS Kairouanaise</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('AS REJICHE')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={ASR} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>AS REJICHE</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('ES HAMMAM-SOUSSE')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={esh} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>ES HAMMAM-SOUSSE</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('CS Hammem Lif')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={csh} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>CS Hammem Lif</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('ES ZARZIS')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={esz} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>ES ZARZIS</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('Stade Gabesien')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={sg} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>Stade Gabesien</h4></div>
                                    </a></li>
                                    <li><a href="#" onClick={() => handleTeamClick('AS Gabès')}><div className='teams-acc'>
                                        <div className='flag-team'>
                                            <img src={asg} alt="CA" className='team-pic' />
                                        </div>
                                        <h4>AS Gabès</h4></div>
                                    </a></li>

                                </ul>
                            )}
                        </li>
                    </div>

                </ul>

            </div>
            {menuOpen && (

                <ul className="team-dropdown-menu side-nav">
                    <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Home')} >
                        <a href="/Account" ><FaHome className='' /> Home</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'Matches' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Matches')}>
                        <a href="/AccMatches"><FaFutbol className='' /> Matches</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'Teams' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Teams')}>
                        <a href="/AccTeams"><FaUsers className='' /> Teams</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'Players' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Players')}>
                        <a href="/AccPlayers"><FaUsers className='' /> Players</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'Standings' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Standings')}>
                        <a href="/Standings"><FaTable className='' /> Standings</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'News' ? 'active' : ''}`} onClick={() => handleMenuItemClick('News')}>
                        <a href="/News"><FaNewspaper className='' /> News</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'Settings' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Settings')}>
                        <a href="/AccSettings"><FaCog className='' /> Settings</a>
                    </li>
                    <li className={`nav-item ${activeItem === 'Log Out' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Log Out')}>
                        <a href="/" onClick={() => navigate('/')}><FaSignOutAlt className='' />Log Out</a>
                    </li>

                </ul>


            )}
        </div>
    );
};
export default AccNavbar;
