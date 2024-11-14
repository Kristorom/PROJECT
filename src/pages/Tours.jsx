import React, { useState } from 'react';
import '../styles/Tours.css';
import GalleryPagination from '../components/GalleryPagination';
import BookingFormModal from '../components/BookingFormModal';

const Tours = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookNowClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="tours-page">
            <h2 className="section-title">Book your dream tour</h2>
            <div className="tours-container">
                <div className="tour-card">
                    <img src="/images/paris.jpg" alt="Tour to Paris" className="tour-image" />
                    <h3>Tour to Paris</h3>
                    <p>5 days/4 nights, starting at $500</p>
                    <button onClick={handleBookNowClick}>Book now</button>
                </div>
                <div className="tour-card">
                    <img src="/images/spain.jpg" alt="Tour to Spain" className="tour-image" />
                    <h3>Tour to Spain</h3>
                    <p>5 days/4 nights, starting at $500</p>
                    <button onClick={handleBookNowClick}>Book now</button>
                </div>
                <div className="tour-card">
                    <img src="/images/croatia.jpg" alt="Tour to Croatia" className="tour-image" />
                    <h3>Tour to Croatia</h3>
                    <p>5 days/4 nights, starting at $500</p>
                    <button onClick={handleBookNowClick}>Book now</button>
                </div>
                <div className="tour-card">
                    <img src="/images/austria.jpg" alt="Tour to Austria" className="tour-image" />
                    <h3>Tour to Austria</h3>
                    <p>5 days/4 nights, starting at $500</p>
                    <button onClick={handleBookNowClick}>Book now</button>
                </div>
            </div>

            <h2 className="section-title">Our Gallery</h2>
            <GalleryPagination />

            {/* Booking Form Modal */}
            <BookingFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Tours;
