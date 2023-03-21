import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import BasicExample from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <BasicExample></BasicExample>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;