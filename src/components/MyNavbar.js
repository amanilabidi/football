import React, { useState } from 'react';
import '../App.css';
import { FaHome, FaFutbol, FaUsers, FaTable, FaNewspaper, FaCog, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const MyNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [accountSettingsOpen, setAccountSettingsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleSettings = () => {
        setSettingsOpen(!settingsOpen);
        setAccountSettingsOpen(false);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="navbar">
            <div className="navbar-menu">
                <ul className="nav-links">
                    <li><a href="/" className='home-icon'><FaHome className='navbar-icon' /> Home</a></li>
                    <li><a href="/matches"><FaFutbol className='navbar-icon' /> Matches</a></li>
                    <li><a href="/teams"><FaUsers className='navbar-icon' /> Teams</a></li>
                    <li><a href="/players"><FaUsers className='navbar-icon' /> Players</a></li>
                    <li><a href="/standings"><FaTable className='navbar-icon' /> Standings</a></li>
                    <li><a href="/news"><FaNewspaper className='navbar-icon' /> News</a></li>
                    <li><a href="#" onClick={toggleSettings}><FaCog className='navbar-icon' /> Settings</a></li>

                </ul>
            </div>
            {settingsOpen && (
                <div className="setting-slider">

                    <ul className="mode">
                        <li className="dark-mode-toggle">

                            <span className="mode-label">
                                {darkMode ? 'Dark Mode is activated ' : 'Light Mode is activated'}
                            </span>
                            <span className="toggle-icon">{darkMode ? <FaMoon /> : <FaSun />}</span>
                            <label className="switch">
                                <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
                                <span className="slider"></span>
                            </label>

                        </li>
                        <li><a href="/Settings" className='icon-setting'><FaCog className='navbar-icon' />Settings</a></li>

                    </ul>

                </div>
            )}
            <div className='navbar-menu-responsive'>
                <ul className="nav-links">
                    <li>
                        <a href="#" onClick={toggleMenu} >
                            {menuOpen ? <FaTimes className='navbar-res-icon' /> : <FaBars className='navbar-res-icon' />}
                        </a>
                    </li>
                </ul>
            </div>
            {menuOpen && (
                <div className="additional-options">

                    <ul className="nav-links-res">
                        <li ><a href="/" ><FaHome className='navbar-icon-res' /> Home</a></li>
                        <li><a href="/matches"><FaFutbol className='navbar-icon-res' /> Matches</a></li>
                        <li><a href="/teams"><FaUsers className='navbar-icon-res' /> Teams</a></li>
                        <li><a href="/players"><FaUsers className='navbar-icon-res' /> Players</a></li>
                        <li><a href="/standings"><FaTable className='navbar-icon-res' /> Standings</a></li>
                        <li><a href="/news"><FaNewspaper className='navbar-icon-res' /> News</a></li>
                        <li><a href="/settings"><FaCog className='navbar-icon-res' /> Settings</a></li>

                    </ul>

                </div>
            )}
        </div>
    );
};

export default MyNavbar;
