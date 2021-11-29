import React from 'react'

const About = () => {

    return (
        <section id="about">
            <div className="container about_me">
                <div data-aos="fade-right" className="about_top">
                    <h1>About Me</h1>
                    <p>I am passionate at web development,software development with writing elegant code.I enjoy
                    problem solvings to develop my programming skills and love to read blogs,listening to podcasts
                    to keep me up to date.
                </p>
                    <div className="line"></div>
                </div>
                <div className="about_bottom">
                    <div data-aos="fade-right" className="about_bottom_left">
                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/144273122_2834793846764859_9213739695498934522_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGQoyplE5T03Jh-wNH65WwdLz4O18N_yYgvPg7Xw3_JiMaLPG79wR1Pm-6bcXS2z6dhYgyasHl0JTU73uzd6FYv&_nc_ohc=XwE1g4uK5QoAX_xCyP1&_nc_ht=scontent.fcgp7-1.fna&oh=18bfb161cc4107acd03b39a60315d611&oe=61C78A0E" alt="about_image" />
                    </div>
                    <div data-aos="fade-left" className="about_bottom_right">
                        <h2>Competitive  Programmer and Web Developer</h2>
                        <div className="about_details">
                            <div className="about_details_left">
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Birthday:</span> 7 November,1999</p>
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Website:</span></p>
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Phone:</span> 01793243664</p>
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>City:</span> Chittagong, Bangladesh</p>
                            </div>
                            <div className="about_details_right">
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Age:</span> 22</p>
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Degree:</span> BSC Engineering(CSE)</p>
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Email:</span> ataulhamidalvi@gmail.com</p>
                                <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Freelance:</span> Partly Available</p>
                            </div>
                        </div>
                        <p>I also love to work on machine learning,NLP,Deep Learning as well as AI related
                        technology.I like to build applications that will solve real life problems
                        for making the world easier.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
