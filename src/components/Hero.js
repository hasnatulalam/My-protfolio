import React from 'react'
import TypeWriter from 'typewriter-effect'

import CV from '../assets/Hasnatul-Resume.pdf'
import { Link } from 'react-scroll'
const Hero = () => {
    return (
        <div id="hero" className="container">
            <div className="hero_left">
                <div className="social_links">
                    <ul>
                        <li className="link_item"><a href="https://www.facebook.com/hasibulalam.hasnatulalam"><i className="fa fa-facebook"></i></a></li>
                        <li className="link_item"><a href=""><i className="fa fa-instagram"></i></a></li>
                        <li className="link_item"><a href="https://github.com/hasnatulalam"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li className="link_item"><a href="https://www.linkedin.com/in/hasnatul-alam-a847b421b"><i className="fa fa-linkedin"></i></a></li>
                    </ul>


                </div>

                <p className="name">Hasnatul Alam</p>
                <p className="title"><span class="title_span">I'm a  </span>
                    <TypeWriter
                        options={{
                            strings: ['Programmer', 'Developer', 'Debugger'],
                            autoStart: true,
                            delay: 60,
                            loop: true,
                        }}
                    />
                </p>
                <div className="hero_btns">
                    <p className="cv_download"><a target="_blank" rel="noreferrer" href={CV}>Download CV <span><i className="fa fa-download" aria-hidden="true"></i></span></a></p>
                    <p className="hire_btn">
                        <Link to="contact">Hire Me</Link>
                    </p>
                </div>
            </div>
            <div className="hero_right">
           
                <img  src="https://muktadir.vercel.app/_next/image?url=%2Fimages%2FworkFromAnywhere.svg&w=640&q=75" alt=""data-aos="fade-left" />

            </div>
        </div>
    )
}

export default Hero

