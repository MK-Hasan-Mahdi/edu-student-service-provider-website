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
            <div className='border p-2 m-2'>
                <img className=' w-100 rounded-3 ' src={img} alt="" />
                <div className='mx-auto d-block px-3 course-info'>
                    <h5>{name}</h5>
                    <p>Price:{price}</p>
                    <p><small>{description}</small></p>

                    <button onClick={() => navigateToCourseDetail(id)} className='btn btn-success px-3'>Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default Course;