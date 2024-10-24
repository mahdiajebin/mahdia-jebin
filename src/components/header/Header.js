import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            &lt;M/J&gt;
            <div className="navbar-icon">
              <a
                href="https://github.com/mahdiajebin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mahdia-jebin-a7034a155/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
};
export default Header;