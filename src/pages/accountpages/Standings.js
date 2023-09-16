
import React, { useState } from 'react';
import flagtun from '../../images/flagtun.png';
import ligImage from '../../images/lig.png';
import { FaGreaterThan } from 'react-icons/fa';
import TeamsA from './TeamsA';
import TeamB from './TeamB';


const Standings = () => {
    return (
        <div className='accHome'>
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
                        <li><a href="http://localhost:3000/Account" >SUMMARY</a></li>
                        <li><a href="/news" >NEWS</a></li>
                        <li><a href="/results" >RESULTS</a></li>
                        <li><a href="/fixtures" >FIXTURES</a></li>
                        <li><a href="/standings" className='first' >STANDINGS</a></li>
                        <li><a href="/archive" >ARCHIVE</a></li>
                    </ul>
                </div>
            </div>
            <TeamsA />
            <TeamB />
            <div className='acc-part'>
                <div className='foot-standings'>
                    <div>
                        <div className='empty-blue'></div>
                        <p>Promotion - Ligue Professionnelle 1 (Championship Group: )</p>
                    </div>
                    <div>
                        <div className='empty-red'></div>
                        <p>Ligue Professionnelle 1 (Relegation Group: )</p>
                    </div>
                </div>
                <div className='acc-part-foot'>
                <p>If points are tied at the end of the competition, head-to-head matches will be the tie-breaker.</p>
            </div>
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

export default Standings;