import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/Home.css';


const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="content">
                    <ul className="navigation">
                        <li className="link"><Link to="/">Main</Link></li>
                        <li className="link"><Link to="/services">Services</Link></li>
                        <li className="link"><Link to="/about">About</Link></li>
                        <li className="site-logo"><Link to="/">DreamTrip</Link></li>
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
