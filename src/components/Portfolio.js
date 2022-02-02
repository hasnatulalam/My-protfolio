import React from 'react'
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';

import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => {
    const projects = [
        {
            name: "Call Doctor",
            img: p2,
            
            languageOrFramwork: "React ",
            link: "https://github.com/hasnatulalam/healthcare-related-website"
        },
        {
            name: "Burj Al Arab",
          
            img:p1,
           
            languageOrFramwork: "NODE JS,EXPRESS JS , Mongodb",
            link: "https://github.com/hasnatulalam/tourism-or-delivery-website-client-side-",

        },
        {
            name: "Car Bd",
           
            img:p3,
            
            languageOrFramwork: "React, Node js, Express Js, Mongodb",
            link: "https://github.com/hasnatulalam/Car_Bd-client"
        },
        {
            name: "Best Teacher",
            img: p4,
         
            languageOrFramwork: "React",
            link: "https://github.com/hasnatulalam/the-superhero-direction"
        },
        {
            name: "Mac Book Pro",
            img: p5,
            
            languageOrFramwork: "HTML,CSS,JS",
            link: "https://github.com/hasnatulalam/macbook"
        },
        {
            name: "Hero Honda",
            img:p6,
           
            languageOrFramwork: "Html, Css JS",
            link: "https://github.com/hasnatulalam/book-archive"
        },
        {
            name: "Penguine Shop ",
            img: p8,
          
            languageOrFramwork: "html, css, javascript",
            link: "https://github.com/hasnatulalam/penguine-bootstap"
        },
        {
            name: "Alvi's Restaurant",
            img: p7,
           
            languageOrFramwork: "html, bootstrap, JS",
            link: "https://github.com/hasnatulalam/healthy-food-network"
        }
    ];
    return (
        <section id="portfolio">
            <div className="container portfolio_section">
                <h1 data-aos="fade-left">Portfolio</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 ">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img" />
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>
                                                <p className="languages">Language/Framework: {project.languageOrFramwork}</p>
                                                <a target="_blank" rel="noreferrer" href={project.link}>{index === 0 ? 'Preview Link' : 'Github Link'}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>

        </section>
    )
}

export default Portfolio
