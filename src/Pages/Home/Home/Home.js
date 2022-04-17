import React from 'react';
import Blogs from '../../Blogs/Blogs/Blogs';
import Courses from '../Courses/Courses';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Courses></Courses>
        </div>
    );
};

export default Home;