import React from 'react';
import StandingsTable from './StandingsTable';

const teams = [
  { name: 'Club Africain', points: 4, logo:'https://static.flashscore.com/res/image/data/vRAKqa7k-ltB92yKu.png',mp:2, wins:1, drows:1, lows: 0,goals:'1:0',gd:1, form:'D' },
  { name: 'Stade Tunisien', points: 6 , logo:'https://static.flashscore.com/res/image/data/O4tnXRT0-ltB92yKu.png',mp:2, wins:2, drows:0, lows: 0,goals:'5:1', gd:4 ,form:'W'},
  { name: 'Gafsa', points: 1, logo:'https://static.flashscore.com/res/image/data/YugLHXBN-ltB92yKu.png',mp:1, wins:0, drows:1, lows: 0,goals:'0:0',gd:0,form:'D' },
  { name: 'Etoile Sahel', points: 3, logo:'https://static.flashscore.com/res/image/data/bqiV7K7k-ltB92yKu.png',mp:2, wins:1, drows:0, lows: 1,goals:'2:2', gd:0 ,form:'W'},
  { name: 'Soliman', points: 1, logo:'https://static.flashscore.com/res/image/data/EN7rETRq-ltB92yKu.png',mp:1, wins:1, drows:0, lows: 0 ,goals:'1:2', gd:-1, form:'L'},
  { name: ' Olympique Beja ', points: 3, logo:'https://static.flashscore.com/res/image/data/fHCZTY7k-ltB92yKu.png',mp:2, wins:1, drows:0, lows: 1, goals:'2:4',gd:-2, form:'L' },
  { name: ' Ben Guerdane', points: 0, logo:'https://static.flashscore.com/res/image/data/xriYShU0-ltB92yKu.png',mp:2, wins:0, drows:0, lows: 2,goals:'0:2',gd:-2,form:'L' }

];

function TeamsA() {
  return (
    <div className="acc-part">
      <StandingsTable teams={teams} />
    </div>
  );
}

export default TeamsA;
