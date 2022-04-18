import React from 'react';
import experiences from '../../../images/experiences.jpg';

const Experience = () => {
    return (
        <div className='container'>
            <h2 className='text-success text-center mt-5'>My Experiences of Teaching</h2>
            <div className='row my-4'>
                <div className='col-lg-6'>
                    <img className='w-100 shadow-lg ' src={experiences} alt="" />
                </div>
                <div className='col-lg-6 d-flex align-items-center justify-content-end'>
                    <div>
                        <h4 className='fw-bold pb-2 fs-2'>Mentoring Program</h4>
                        <p>My mentorship program helps who are looking forwar this type of system, new to  javascript, or facing a changing academic or UI UX design problems to come to grips with unexpected aspects of through the assistance of other professionals in their field. I am Experienced, expert instructors serve as mentors for less experienced educators, walking them through proven efficient strategies for managing disciplinary problems, time management, parent interaction, and more. I build a custom-made curriculum starting at a level that's comfortable...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;