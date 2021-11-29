import React, { useEffect, useState } from 'react';
import './Intro.css';
import Typewriter from 'typewriter-effect';



const Intro = () => {

    return (
        <div className="d-flex align-items-center intro">
            <div className="row">
                <div className="col-md-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 d-flex align-items-center" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div>
                        <h1 className="intro-description">Hi, I am <span style={{ color: '#0bc2c2' }}>Roky Das</span></h1>
                        <h4>
                            <Typewriter
                                options={{
                                    strings: ["Front End Developer", "React Developer", "Programmer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <p>I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer. </p>
                        
                        <a href="https://www.linkedin.com/in/roky-das-448b3617b/" target="_blank"><button className="custom-btn mr-3">Hire Me</button></a>
                        <a href="https://drive.google.com/u/0/uc?id=1CgI-MBkWILCNSxn4MrJ_EQjRnhFz0sar" target="_blank"><button className="custom-btn">Resume</button></a>
                    </div>
                </div>
                <div className="col-md-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="zoom-in-up">
                    <div className="intro-img text-center">
                        <img width="80%" className="img-fluid" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.americancrew.com%2F&psig=AOvVaw3IMzc-kRbblYfwvI03wxna&ust=1638278178619000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiasbfUvfQCFQAAAAAdAAAAABAD" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Intro;