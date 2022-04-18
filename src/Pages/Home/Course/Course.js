import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { id, name, img, description, price } = course;
    const navigate = useNavigate();

    const navigateToCourseDetail = (id) => {
        // console.log(id);
        navigate(`/course/${id}`)
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div style={{ boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.15)' }} className='card border p-2 m-2'>
                <img className=' w-100 rounded-3' src={img} alt="" />
                <div className='d-flex flex-column justify-content-center align-items-center py-3'>
                    <h5>{name}</h5>
                    <p>Price:{price}</p>
                    <p><small>{description}</small></p>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <button onClick={() => navigateToCourseDetail(id)} className='btn btn-success rounded-3 py-2 my-1 buy-btn'>Buy Course</button>
                </div>

            </div>
        </div >
    );
};

export default Course;