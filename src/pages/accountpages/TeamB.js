import React from 'react';
import StandingsTable from './StandingsTable';

const teams = [
  { name: 'Monastir', points: 3, logo:'https://static.flashscore.com/res/image/data/pUVUjHjC-ltB92yKu.png',mp:1, wins:1, drows:0, lows: 0,goals:'3:0',gd:3, form:'W' },
  { name: 'Metlaoui' , points: 3 , logo:'https://static.flashscore.com/res/image/data/hjsxnmgT-ltB92yKu.png',mp:1, wins:1, drows:0, lows: 0,goals:'1:0', gd:1 ,form:'W'},
  { name: 'US Tataouine', points: 1, logo:'https://static.flashscore.com/res/image/data/CG0Yi0iT-ltB92yKu.png',mp:2, wins:0, drows:1, lows: 1,goals:'1:2',gd:-1,form:'D' },
  { name: 'CS Sfaxien', points: 6, logo:'https://static.flashscore.com/res/image/data/IJO1iuWH-ltB92yKu.png',mp:2, wins:2, drows:0, lows: 0,goals:'3:0', gd:3 ,form:'W'},
  { name: 'AS Marsa', points: 0, logo:'https://static.flashscore.com/res/image/data/fZvCLvAN-ltB92yKu.png',mp:2, wins:0, drows:0, lows: 2 ,goals:'0:2', gd:-2, form:'L'},
  { name: ' Bizertin', points: 0, logo:'https://static.flashscore.com/res/image/data/xbeeIiT0-ltB92yKu.png',mp:2, wins:0, drows:0, lows: 2, goals:'0:4',gd:-4, form:'L' },
  { name: 'Esperance Tunis', points: 4, logo:'https://static.flashscore.com/res/image/data/MwJ5a4AN-ltB92yKu.png',mp:2, wins:1, drows:1, lows: 0,goals:'1:2',gd:1,form:'D' }

];

function TeamB() {
  return (
    <div className="acc-part">
      <StandingsTable teams={teams} />
    </div>
  );
}

export default TeamB;