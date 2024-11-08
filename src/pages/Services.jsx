import React from 'react';
import '../styles/Services.css';
const Services = () => {
    return (
        <section class="services" id="services">
        <div class="content">
            <h1 class="heading">What services do we offer</h1>
            <div class="cards">
                <div class="box">
                    <i class="fas fa-hotel"></i>
                    <h3>Booking airline tickets</h3>
                    <p>We provide airline ticket booking services at the best prices</p>
                </div>
                <div class="box">
                    <i class="fas fa-plane"></i>
                    <h3>Visa application</h3>
                    <p>We provide fast and secure visa processing for any country</p>
                </div>
                <div class="box">
                    <i class="fas fa-bed"></i>
                    <h3>Hotels</h3>
                    <p>We book hotels of any category around the world</p>
                </div>
               
            </div>
        </div>
    </section>
    );
};

export default Services;
