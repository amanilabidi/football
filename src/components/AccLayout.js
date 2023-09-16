
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccNavbar from './AccNavbar';

const AccLayout = ({ children }) => {
    return (
        <div className='accountLayout'>
            <Header />
            <AccNavbar />
            {children}
            <Footer />
        </div>
    );
};

export default AccLayout;
