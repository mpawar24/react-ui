import React from 'react';
import './main-layout.css';
import {Outlet} from 'react-router-dom';
import Sidebar from './../components/sidebar/Sidebar';
import TopNav from '../components/topNav/TopNav';

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <div className='main'>
                <div className='main__content'>
                    <TopNav/>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default MainLayout
