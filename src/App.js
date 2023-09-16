import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layaout from './components/Lyaout';
import Settings from './pages/Settings';
import Teams from './pages/Teams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layaout><Home /></Layaout>} />
          <Route path="/teams" element={<Layaout><Teams /></Layaout>} />
          <Route path="/settings" element={<Layaout><Settings /></Layaout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

