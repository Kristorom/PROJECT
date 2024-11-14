import React from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact us</h2>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your name..." />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Your Email..." />

                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Your question"></textarea>

                <button type="submit" className="contact-button">Leave a request</button>
            </form>
        </div>
    );
};

export default Contacts;
