import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="nav-bar" id="navbar">
                <div className="content">
                    <ul className="navigation" id="navigation">
                        <li className="link"><Link to="/">Main</Link></li>
                        <li className="link"><Link to="/services">Services</Link></li>
                        <li className="link"><Link to="/about">About</Link></li>
                        <div className="site-logo">
                            <Link to="/" className="logo-link" id="navlogo">DreamTrip</Link>
                        </div>
                        <li className="link"><Link to="/tours">Tours</Link></li>
                        <li className="link"><Link to="/contacts">Contacts</Link></li>
                        <li className="link"><Link to="/login">Log in</Link></li>
                        <li className="link"><button className="nav-btn" id="close-btn">Закрити</button></li>
                    </ul>
                    <div className="menu-icon" id="menu-icon">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;