import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    return (
        <div style={{ height: "100vh" }} className='container my-5'>
            <h2 className=''>Welcome to my course buying process</h2>
            <p>For further proceed please checkout first. Hopefully we will deal a better opportunity.</p>
            <div className='text-center '>
                <Link to="/checkout">
                    <button className='btn btn-dark btn-lg'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetail;