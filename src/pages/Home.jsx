import React from 'react';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Travel without restrictions - your ideal trips are here</h1>
                <p className="home-subtitle">Book your dream trip</p>
                <button className="home-button">Leave a request</button>
            </div>
            <Footer />
            
        </div>
    );
};

export default Home;
