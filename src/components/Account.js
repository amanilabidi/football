
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccHome from '../pages/accountpages/AccHome';
import AccLayout from './AccLayout';
import News from '../pages/accountpages/News';
import Results from '../pages/accountpages/Results';
import Fixtures from '../pages/accountpages/Fixtures';
import Standings from '../pages/accountpages/Standings';
import Archive from '../pages/accountpages/Archive';
import AccSettings from '../pages/accountpages/AccSettings';
import AccMatches from '../pages/accountpages/AccMatches';
import AccTeams from '../pages/accountpages/AccTeams';
import AccPlayers from '../pages/accountpages/AccPlayers';

const Account = () => {
  return (
    <div className='account'>
        <BrowserRouter>
        <Routes>
          <Route path="/Account" element={<AccLayout ><AccHome /></AccLayout>} />
          <Route path="/news" element={<AccLayout ><News /></AccLayout>} />
          <Route path="/results" element={<AccLayout ><Results /></AccLayout>} />
          <Route path="/fixtures" element={<AccLayout ><Fixtures /></AccLayout>} />
          <Route path="/standings" element={<AccLayout ><Standings /></AccLayout>} />
          <Route path="/archive" element={<AccLayout ><Archive /></AccLayout>} />
          <Route path="/AccSettings" element={<AccLayout ><AccSettings /></AccLayout>} />
          <Route path="/AccMatches" element={<AccLayout ><AccMatches /></AccLayout>} />
          <Route path="/AccTeams" element={<AccLayout ><AccTeams /></AccLayout>} />
          <Route path="/AccPlayers" element={<AccLayout ><AccPlayers /></AccLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Account;