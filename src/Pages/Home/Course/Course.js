import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    const { name, img, description, price } = course;
    return (
        <div className='course border border-light '>
            <img className='w-100 rounded-3 ' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-success mx-auto d-block px-3'>Buy Now</button>
        </div >
    );
};

export default Course;