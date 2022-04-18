import React from 'react';
import hasan from '../../images/hasan.jpg';

const About = () => {
    return (
        <div style={{ height: "100vh" }} className='container mt-2'>
            <h2 className='text-center text-success'>This is About me</h2>
            <div className='row'>
                <div className='col-lg-6 d-flex align-items-center justify-content-end'>
                    <div>
                        <p>
                            Hello, I am Md. Kamrul Hasan. Last 4 months I have spend beautiful and sharp path with Programming Hero for build me a web developer. Modern technology of web developing with javascript is provided by PHero, it's helps to become web developer. It's really challenging but not impossible. Every day's workings give me progressed from last days, sharpen my skills and knowledge. In future InshaAllah I will also go on this hard work like now. I'm eagerly waiting explore myself more in professional web development career in IT Industry. Exploring and taking challenge never feels me give up. However it is important that honesty in dedication must be reached anyone to his goal.
                        </p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='mx-5 px-5'>
                        <img className='rounded' height={400} src={hasan} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;