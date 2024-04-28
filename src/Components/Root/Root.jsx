import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;