import React from 'react';
import '../styles/BookingFormModal.css';

const BookingFormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Booking Form</h2>
                <form className="booking-form">
                    {/* Left Column */}
                    <div className="form-column">
                        <label>
                            Name:
                            <input type="text" placeholder="Enter your name" required />
                        </label>
                        <label>
                            Email:
                            <input type="email" placeholder="Enter your email" required />
                        </label>
                        <label>
                            Phone:
                            <input type="tel" placeholder="Enter your phone number" required />
                        </label>
                        <label>
                            Upload a passport photo:
                            <input type="file" accept="image/*" required />
                        </label>
                    </div>

                    {/* Right Column */}
                    <div className="form-column">
                        <label>
                            Destination:
                            <input type="text" placeholder="Enter destination" required />
                        </label>
                        <label>
                            Select Date:
                            <input type="date" required />
                        </label>
                        <label>
                            Num of people:
                            <input type="number" min="1" placeholder="Enter number of people" required />
                        </label>
                    </div>
                </form>

                {/* Buttons Container */}
                <div className="button-container">
                    <button type="submit" className="submit-button">Book trip</button>
                    <button className="close-button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default BookingFormModal;
