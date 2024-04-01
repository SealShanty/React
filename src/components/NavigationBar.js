import React from 'react';
import react_logo from '../assets/images/react_logo.png';
import { Link, Outlet } from 'react-router-dom';

export default function NavigationBar() {

    const navigateToSite = (url) => {
        window.location.href = url;
    };

    return (
        <div>
            <div className="toolbar-container">
                <div className="toolbar">
                    <div onClick={() => navigateToSite('https://furrycdn.org/img/2021/3/31/77812/full.gif')} className="toolbar-header">
                        <img className="toolbar-icon" src={react_logo} />
                        <div>UwU</div>
                    </div>
                        <Link className='toolbar-item' to="/">Home</Link>
                        <Link className="toolbar-item" to="/spongee">Spongee</Link>
                        <Link className='toolbar-item' to="/about">About</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}