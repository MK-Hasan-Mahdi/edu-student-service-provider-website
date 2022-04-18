import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='bg-dark text-center text-white footer'>
            <div className="text-center p-3">
                &#169;  Copyright {year}:
                <p className="text-white text-decoration-none px-3">EDU-STUDENT</p>
            </div>

        </footer>
        // fixed-bottom
    );
};

export default Footer;