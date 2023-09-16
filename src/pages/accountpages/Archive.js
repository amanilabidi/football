import flagtun from '../../images/flagtun.png';
import ligImage from '../../images/lig.png';
import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { useState } from 'react';
const Archive = () => {
    const [showHiddenElement, setShowHiddenElement] = useState(false);
    const handleShowMoreClick = () => {
        setShowHiddenElement(true);
    };
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
                        <li><a href="/standings" >STANDINGS</a></li>
                        <li><a href="/archive" className='first'>ARCHIVE</a></li>
                    </ul>
                </div>
            </div>
            <div className='acc-part'>
                <div className='tunisia-archive '>
                    <div className='archive-title'><p>SEASON</p></div>
                    <div className='archive-title'><p>WINNER</p></div>
                </div>
                <div className='archive-container'>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2023/2024</a>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2022/2023</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
                            <span className='team-txt'>Etoile Sahel</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2021/2022</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2020/2021</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2019/2020</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2018/2019</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2017/2018</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2016/2017</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2015/2016</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png" />
                            <span className='team-txt'>Etoile Sahel</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2014/2015</a>
                        </div>
                        <div className='team-event winner'>
                            <img
                                className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png"
                                alt="Home Team Logo"
                            />
                            <span className='team-txt'>Club Africain</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2013/2014</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2012/2013</a>
                        </div>
                        <div className='team-event winner'>
              <img className="club"
                loading="lazy"
                src="https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png" />
              <span className='team-txt'>CS Sfaxien</span>
            </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2011/2012</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2010/2011</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2009/2010</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp tunisia-archive'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2008/2009</a>
                        </div>
                        <div className='team-event winner'>
                            <img className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png" />
                            <span className='team-txt'>Esperance Tunis</span>
                        </div>
                    </div>
                    <div className='archive-comp'>
                        <div className='compition-name'>
                            <a href='/'>Ligue Professionnelle 1 2007/2008</a>
                        </div>
                        <div className='team-event winner'>
                            <img
                                className="club"
                                loading="lazy"
                                src="https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png"
                                alt="Home Team Logo"
                            />
                            <span className='team-txt'>Club Africain</span>
                        </div>
                    </div>
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

export default Archive;