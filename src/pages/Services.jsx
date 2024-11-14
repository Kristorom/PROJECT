import React from 'react';
import '../styles/Services.css';
import { FaPlane, FaPassport, FaHotel } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services">
            <h2 className="services-title">What services do we offer</h2>
            <div className="services-container">
                <div className="service-card">
                    <FaPlane className="service-icon" />
                    <h3 className="service-title">Booking airline tickets</h3>
                    <p className="service-description">
                        We provide airline ticket booking services at the best prices
                    </p>
                </div>
                <div className="service-card">
                    <FaPassport className="service-icon" />
                    <h3 className="service-title">Visa application</h3>
                    <p className="service-description">
                        We provide fast and secure visa processing for any country
                    </p>
                </div>
                <div className="service-card">
                    <FaHotel className="service-icon" />
                    <h3 className="service-title">Hotels</h3>
                    <p className="service-description">
                        We book hotels of any category around the world
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
