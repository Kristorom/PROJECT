import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';

const Home = () => {
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
    
            <header className="main" id="main">
                <div className="content">
                    <h1>Travel without restrictions - your ideal trips are here</h1>
                    <h4>Book your dream trip</h4>
                    <div className="modal">
                        <Link to="/contacts" className="btn-request"><span className="button-txt">Leave a request</span></Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
