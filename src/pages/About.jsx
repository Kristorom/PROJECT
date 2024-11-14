import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="why-choose-section">
                <img 
                    src="/images/about.png" 
                    alt="People walking in nature" 
                    className="why-image" 
                />
                <div className="why-text">
                    <h2>Why choose us?</h2>
                    <p>At our travel agency, we strive to make your travels unforgettable. We cooperate only with reliable partners, which guarantees a high level of service. <strong>By choosing us</strong>, you get not just a tour, but a full range of services for a comfortable stay.</p>
                    <p>Give us the opportunity to create unforgettable moments for you!</p>
                </div>
            </div>

            <div className="callback-section">
                <h2>Callback</h2>
                <form className="callback-form">
                    <input type="text" placeholder="Enter your name..." required/>
                    <input type="text" placeholder="Enter your phone..." required/>
                    <button type="submit">Request a call</button>
                </form>
            </div>
        </div>
    );
};

export default About;
