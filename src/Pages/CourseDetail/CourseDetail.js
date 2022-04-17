import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    return (
        <div className='container'>
            <h2>Welcome to course detail: {courseId} </h2>
            <div className='text-center '>
                <Link to="/checkout">
                    <Button>Checkout</Button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetail;