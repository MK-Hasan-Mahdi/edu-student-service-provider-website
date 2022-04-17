import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='bg-dark text-center text-white fixed-bottom'>
            <div className="text-center p-3">
                &#169;  Copyright {year}:
                <a className="text-white text-decoration-none px-3">EDU-STUDENT</a>
            </div>

        </footer>

    );
};

export default Footer;