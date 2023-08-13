import React, { useState } from 'react';
import Styles from './Blog.module.css';
import Navbar from '../home/Navbar';
import { AiOutlineRight } from 'react-icons/ai';
import Blogs from '../home/Blogs';
import Footer from '../home/Footer';


function Blog() {

    const[blogsCount, setBlogsCount] = useState(6);
    const loadMoreBlogs = () => {
        setBlogsCount(blogsCount + 3);
    };
    return (
        <>
            <div className={Styles.header}>
                <div className={Styles.navigation}>
                    <Navbar />
                    <div className={Styles.hero_section}>
                        <div className={Styles.title}>Blog</div>
                    </div>
                </div>


            </div>

            <div className={Styles.product_section1}>
                <div className={Styles.heading1}>From The Blog</div>
                <Blogs blogsCount ={blogsCount} />

                <div className={Styles.btn}>
                    <button onClick={loadMoreBlogs}>View More <AiOutlineRight /></button>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Blog;