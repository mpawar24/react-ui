import React, { useState, useEffect } from 'react';
import navItems from './../../config/navItems';
import {Link, useLocation} from 'react-router-dom';
import './Sidebar.scss';
import images from '../../constants/images';
const Sidebar = () => {
    const [activeNav, setActiveNav] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const path = window.location.pathname.split('/')[1];
        const activeItem = navItems.findIndex(item => item.section === path);
        setActiveNav(path.length === 0 ? 0 : activeItem)
    }, [location])
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img src={images.logo} alt=""></img>
                <div className='sidebar-close'>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    navItems.map((nav, index) => {
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item
                        {activeIndex === index && 'active'}`}>
                            <div className="sidebar__menu__item__icon">
                               {nav.icon} 
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    })
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