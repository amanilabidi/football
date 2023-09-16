
import flagtun from '../../images/flagtun.png';
import ligImage from '../../images/lig.png';
import React from 'react';
import { FaGreaterThan, FaNewspaper } from 'react-icons/fa';
const News = () => {

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
                        <li><a href="/news" className='first'>NEWS</a></li>
                        <li><a href="/results" >RESULTS</a></li>
                        <li><a href="/fixtures" >FIXTURES</a></li>
                        <li><a href="/standings" >STANDINGS</a></li>
                        <li><a href="/archive" >ARCHIVE</a></li>
                    </ul>
                </div>
            </div>
            <div className='acc-part'>
                <div className='news-container'>
                    <FaNewspaper className='news-icon' />
                    <h4>No news found.</h4>
                </div>

            </div>
        </div>
    );
};

export default News;