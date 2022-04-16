import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <h2 className=' text-success text-center mt-5'>My Courses</h2>
                <div className="courses-container">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;