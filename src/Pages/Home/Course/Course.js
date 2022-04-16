import React from 'react';

const Course = ({ course }) => {
    const { name, img, description, price } = course;
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button>Buy Now</button>
        </div>
    );
};

export default Course;