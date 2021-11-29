import React from 'react'
import TypeWriter from 'typewriter-effect'

import CV from '../assets/Final-Resume.pdf'
import { Link } from 'react-scroll'
const Hero = () => {
    return (
        <div id="hero" className="container">
            <div className="hero_left">
                <div className="social_links">
                    <ul>
                        <li className="link_item"><a href="https://www.facebook.com/mdataul.hamidalbi.9"><i className="fa fa-facebook"></i></a></li>
                        <li className="link_item"><a href=""><i className="fa fa-instagram"></i></a></li>
                        <li className="link_item"><a href="https://github.com/Ataul-hamid"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li className="link_item"><a href="https://www.linkedin.com/in/ataul-hamid-685852171/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>


                </div>

                <p className="name">Ataul Hamid</p>
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
                <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/120908264_2743251812585730_6366607120945342944_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeG_9voNUeSCipmQqqYDZvTA6C2Ogl48o-_oLY6CXjyj7xdpou--XgEUy0VccGuQ2RsV_WQDU50FQFswuvGw6bev&_nc_ohc=xVgs2356WlcAX-HaZ1h&_nc_ht=scontent.fcgp7-1.fna&oh=ec809defb0d693196f179bb0d6436432&oe=61C78E23" alt="" />

            </div>
        </div>
    )
}

export default Hero

