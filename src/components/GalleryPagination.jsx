import React, { useState } from 'react';
import '../styles/GalleryPagination.css';

const images = [
    '/images/gallery1.jpg', '/images/paris.jpg', '/images/spain.jpg', '/images/austria.jpg',
    '/images/croatia.jpg', '/images/paris.jpg', '/images/austria.jpg', '/images/spain.jpg',
];

const itemsPerPage = 4;

const GalleryPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentImages = images.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {currentImages.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default GalleryPagination;
