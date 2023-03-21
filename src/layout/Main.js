import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import BasicExample from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <BasicExample></BasicExample>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;