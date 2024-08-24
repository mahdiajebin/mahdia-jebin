import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-brand">   &lt;M/J&gt;</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;