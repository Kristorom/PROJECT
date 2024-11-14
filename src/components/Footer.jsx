import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Contacts</h3>
                <p><i className="phone-icon"></i> +44 (0) 203 308 9757</p>
                <p><i className="email-icon"></i> dreamtripco@gmail.com</p>
            </div>
            <div className="footer-copyright">
                © 2024 DreamTrip. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
