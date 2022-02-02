import React from 'react';

import Intro from '../Intro/Intro';

import './Home.css';
import HomeBlogs from '../HomeBlogs/HomeBlogs';
import Footer from '../Footer/Footer';
import Snowfall from 'react-snowfall'
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import TopscrollButton from '../TopscrollButton/TopscrollButton';

const Home = () => {

    return (
        <div className="header">
            <Navbar />
            <Snowfall />
            <Intro />
           <Service/>
            <HomeBlogs />
            <Footer />
            <TopscrollButton/>
        </div>
    );
};

export default Home;