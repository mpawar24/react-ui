import React, { useState } from 'react';
import navItems from './../../config/navItems'
const Sidebar = () => {
    const [activeNav, setActiveNav] = useState(0)
    return (
        <div className='sidebar'>
            Sidebar
        </div>
    )
}
export default Sidebar;