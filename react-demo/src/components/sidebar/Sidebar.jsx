import React, { useState, useEffect } from 'react';
import navItems from './../../config/navItems';
import {Link, useLocation} from 'react-router-dom';
import './Sidebar.scss';
import {images} from '../../constants';

const Sidebar = () => {
    const [activeNav, setActiveNav] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const path = window.location.pathname.split('/')[1];
        const activeItem = navItems.findIndex(item => item.section === path);
        setActiveNav(path.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').getElementsByClassName.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }
    
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img src={images.logo} alt=""></img>
                <div className='sidebar-close' onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    navItems.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className=
                        {`sidebar__menu__item ${activeNav === index && 'active'}`}
                         onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                               {nav.icon} 
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className='sidebar__menu__item'>
                    <div className='sidebar__menu__item__icon'>
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className='sidebar__menu__item__txt'>
                        LogOut
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;