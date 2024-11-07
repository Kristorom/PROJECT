import React from 'react';
import '../styles/Header.css';
const Home = () => {
    return (
        <div>
            <nav class="nav-bar" id="navbar">
        <div class="content">
            
            <ul class="navigation" id="navigation">
                <li class="link"><a href="#main">Main</a></li>
                <li class="link"><a href="#services">Services</a></li>
                <li class="link"><a href="#about">About</a></li>
                <div class="site-logo">
                <a href="#" class="logo-link" id="navlogo">DreamTrip</a>
            </div>
                <li class="link"><a href="#tours">Tours</a></li>
                
                <li class="link"><a href="#contacts">Contacts</a></li>
                <li class="link"><a href="#login">Log in</a></li>
                <li class="link"><button class="nav-btn" id="close-btn">Закрити</button></li>
            </ul>
            <div class="menu-icon" id="menu-icon">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    
    <header class="main" id="main">
        <div class="content">
            <h1>Travel without restrictions - your ideal trips are here</h1>
            <h4>Book your dream trip</h4>
            <div class="modal">
                <a href="#contacts" class="btn-request"><span class="button-txt">Leave a request</span></a>
            </div>
        </div>
    </header>
        </div>
    );
};

export default Home;
