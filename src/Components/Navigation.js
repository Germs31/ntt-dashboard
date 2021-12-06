import React from 'react'
import {Menu, DirectionsBike} from '@mui/icons-material';
const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <DirectionsBike className="logo-icon" />
                <span>DASHBOARD-X</span>
            </div>
            <div className="routes">
                <ul>
                    <li>Payments</li>
                    <li>Activity</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className="hamburger">
                <Menu />
            </div>
        </div>
    )
}

export default Navigation