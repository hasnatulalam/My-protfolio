import React from 'react';
import Blog from '../Blog/Blog';
import { blogData } from '../Blogs/Blogs'

const HomeBlogs = () => {
    return (
        <div className="custom-container">
            <h1 className="heading text-center pb-3 mt-5"><span style={{ borderBottom: '5px solid #02c2c2' }} className="">Some of <span style={{ color: '#02c2c2' }}>My Blogs</span></span></h1>
            <div className="row mt-5 mb-5 ml-2 mr-2">
                {
                    blogData.slice(0, 3).map(blog => <Blog blog={blog} />)
                }
            </div>
            <div className="text-center">
                <a href="/blogs"><button className="custom-btn">More Blogs</button></a>
            </div>
        </div>
    );
};

export default HomeBlogs;