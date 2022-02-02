import React from 'react';
import { Badge } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';

import './About.css';


import Footer from '../Footer/Footer';

const About = (props) => {

    const expertise = ['React JS', 'React Router', 'React Bootstrap', 'Material UI', 'HTML5', 'CSS3', 'Bootstrap4', 'JavaScript (ES6)', 'React Spring', 'PHP'];
    const comfortable = ['Redux', 'Node', 'MongoDB'];
    const familiar = ['GraphQL', 'C#', 'C++', 'Java', 'Python'];
    const extra = ['Adobe Photoshop', 'Adobe Illustrator', 'Android Studio', 'Unity Engine'];
    const operatingSystems = ['Windows (7, 8 and 10)', 'Linux (Ubuntu, Mint)'];
    const tools = ['Git', 'VS Code', 'Visual Studio', 'Chrome Dev Tools', 'Heroku', 'Netlify', 'Firebase', 'Autocad', 'Latex', 'MS Office', 'Filmora', 'Bangla Typing'];
    // const path = props.location;
    // console.log(props.location.pathname);

    return (
        <div style={{ backgroundColor: "#1a3d5d", color: "white" }}>
            <Navbar />
            <div className="custom-container">
                <div className="img-container text-center mt-5 pt-5">
                    <img width="250px" className="img-fluid about-pic" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.americancrew.com%2F&psig=AOvVaw3IMzc-kRbblYfwvI03wxna&ust=1638278178619000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiasbfUvfQCFQAAAAAdAAAAABAD" alt="" />
                </div>
                <div className="details text-center">
                    <h1 className="heading pb-3 mt-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">I'm <span style={{ color: '#0bc2c2' }}>Roky Das</span></span></h1>
                    <p>I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer. I always focus on learning new technology. I am currently studying in the Department of Computer Science and Engineering, University of Chittagong.</p>
                </div>
                <div className="text-center">
                 
                </div>
                <div className="row mt-5 pt-5 mb-5">
                    <div className="col-md-6 skills-border">
                        <h1 className="heading text-center pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">My <span style={{ color: '#0bc2c2' }}>Skills</span></span></h1>
                        <ul>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Expertise:</h4>
                                {
                                    expertise.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Comfortable:</h4>
                                {
                                    comfortable.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>

                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Familiar:</h4>
                                {
                                    familiar.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Extra Skills:</h4>
                                {
                                    extra.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Operating Systems:</h4>
                                {
                                    operatingSystems.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Tools & Softwares:</h4>
                                {
                                    tools.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h1 className="heading text-center pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">My <span style={{ color: '#0bc2c2' }}>Education</span></span></h1>
                        <ul>
                            <li className="mt-3 mb-3">
                                <h4 style={{ color: '#0bc2c2' }}>Under Graduation</h4>
                                <h5>B.Sc Eng. in Computer Science & Engineering,</h5>
                                <h5>University of Chittagong</h5>
                                <h6>5<sup>th</sup> Semester (3<sup>rd</sup> Year)</h6>
                                <h6>2018 - <i>CURRENT</i></h6>
                            </li>
                            <li className="mt-3 mb-3">
                                <h4 style={{ color: '#0bc2c2' }}>Higher Secondary</h4>
                                <h5>HSC 2017</h5>
                                <h5>Chittagong College</h5>
                                <h6>GPA: 5.00 (Out of 5)</h6>
                            </li>
                            <li className="mt-3 mb-3">
                                <h4 style={{ color: '#0bc2c2' }}>Secondary</h4>
                                <h5>SSC 2015</h5>
                                <h5>Chittagong Govt. High School</h5>
                                <h6>GPA: 5.00 (Out of 5)</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
    );
};

export default About;