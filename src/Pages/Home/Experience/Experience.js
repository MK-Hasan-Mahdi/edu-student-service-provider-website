import React from 'react';
import experiences from '../../../images/experiences.jpg';

const Experience = () => {
    return (
        <div className='container my-3'>
            <h2 className='text-success text-center mt-5'>My Experiences of Teaching</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <img className='w-100 ' src={experiences} alt="" />
                </div>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div>
                        <h4 className='fw-bold pb-2 fs-1'>Mentoring Program</h4>
                        <p>My experiences I am sharing with you</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;