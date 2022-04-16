import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer class="bg-dark text-center text-white">
            <div class="text-center p-3">
                &#169;  Copyright {year}:
                <a class="text-white text-decoration-none px-3">EDU-STUDENT</a>
            </div>

        </footer>

    );
};

export default Footer;