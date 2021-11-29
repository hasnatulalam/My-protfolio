import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {

    const { name, img, description, link } = blog;

    return (
        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-xm-12 d-flex justify-content-center mb-3">
            <a href={link} target="_blank">
                <div class="card blog" data-aos="zoom-out">
                    <img class="card-img-top border" height="300px" src={img} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Blog;