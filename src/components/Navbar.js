import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="Navbar_logo">
                <img src="/images/logo.png" alt="" />
                {/* To add your logo put your logo in public --> images folder */}
            </div>

            <div className="Navbar_items">
                <ul>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">ROADMAP</a></li>
                    <li><a href="">TEAM</a></li>
                    <li><a href="">MINT</a></li>
                </ul>
            </div>

            <div className="Navbar_connect">
                <li><div className="dot"></div><a href="">CONNECT</a></li>
            </div>
        </div>
    )
}

export default Navbar
