import React from 'react';
import Courses from '../Courses/Courses';
import Experience from '../Experience/Experience';
import LatestsOnline from '../LatestsOnline/LatestsOnline';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Courses></Courses>
            <Experience></Experience>
            <LatestsOnline></LatestsOnline>
        </div>
    );
};

export default Home;