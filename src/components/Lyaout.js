import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MyNavbar from './MyNavbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <MyNavbar />
            {children} 
            <Footer />
        </div>
    );
};

export default Layout;
