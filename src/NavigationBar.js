import React from 'react';
import react_logo from './assets/images/react_logo.png';

const NavigationBar = () => {

    const navigateToSite = (url) => {
        window.location.href = url;
    };

    return (
        <body>
            <div class="toolbar-container">
                <div class="toolbar">
                    <div onClick={() => navigateToSite('https://furrycdn.org/img/2021/3/31/77812/full.gif')} class="toolbar-header">
                        <img class="toolbar-icon" src={react_logo} />
                        <div>UwU</div>
                    </div>
                    <div class="toolbar-item">Home</div>
                    <div class="toolbar-item">About</div>
                    <div class="toolbar-item">Services</div>
                    <div class="toolbar-item">Contact</div>
                </div>
            </div>
        </body>
    );
}

export default NavigationBar