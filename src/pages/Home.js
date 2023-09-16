
import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import ligImage from '../images/lig.png';
import flagtun from '../images/flagtun.png';
import { FaStar } from 'react-icons/fa';
import Login from '../components/Login';
const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-page'>
        <div className='part1'>
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
                <p>Professional League 1 <FaStar /></p>
                <p className='prof-txt'>2023/2024</p>
              </div>

            </div>
          </div>
          <div className='home-bar'>
            <ul>
              <li><a href="/" className='first'>SUMMARY</a></li>
              <li><a href="/" >NEWS</a></li>
              <li><a href="/" >RESULTS</a></li>
              <li><a href="/" >FIXTURES</a></li>
              <li><a href="/" >STANDINGS</a></li>
              <li><a href="/" >ARCHIVE</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className='home-page'>
        <div className='part1'>
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
                <p>Tunisia Cup <FaStar /></p>
                <p className='prof-txt'>2023/2024</p>
              </div>

            </div>
          </div>
          <div className='home-bar'>
            <ul>
              <li><a href="/" className='first'>SUMMARY</a></li>
              <li><a href="/">NEWS</a></li>
              <li><a href="/">RESULTS</a></li>
              <li><a href="/">FIXTURES</a></li>
              <li><a href="/">STANDINGS</a></li>
              <li><a href="/">ARCHIVE</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className='home-page1'>
      <div className='part1'>
         
          
         <Login />
      

     </div>
      </div>
    </div>
  );
};

export default Home;
