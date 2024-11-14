import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="content">
                    <div className="mobile-logo-and-menu">
                        <div className="site-logo"><Link to="/">DreamTrip</Link></div>
                        <div className="burger-menu" onClick={toggleMenu}>
                            &#9776;
                        </div>
                    </div>
                    <ul className={`navigation ${isOpen ? 'open' : ''}`}>
                        <li className="link"><Link to="/">Main</Link></li>
                        <li className="link"><Link to="/services">Services</Link></li>
                        <li className="link"><Link to="/about">About</Link></li>
                        <li className="site-logo desktop-only"><Link to="/">DreamTrip</Link></li>
                        <li className="link"><Link to="/tours">Tours</Link></li>
                        <li className="link"><Link to="/contacts">Contacts</Link></li>
                        <li className="link"><Link to="/login">Log In</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
