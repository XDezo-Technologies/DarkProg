import React, { useState } from 'react';
import Styles from './Blog.module.css';
import Navbar from '../home/Navbar';
import { AiOutlineRight } from 'react-icons/ai';
import Blogs from '../home/Blogs';
import Footer from '../home/Footer';


function Blog() {

    const [blogsCount, setBlogsCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');

    const loadMoreBlogs = () => {
        setBlogsCount(blogsCount + 3);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
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
                <div className={Styles.productsrch}>
                    <div className={Styles.heading1}>From The Blog</div>
                    <div className={Styles.productsearchbar}>
                        <input className={Styles.searchbutton} placeholder='Search....' onChange={handleSearchChange} value={searchQuery} type="text" />
                        {searchQuery && (
                            <button className={Styles.clearButton} onClick={() => setSearchQuery("")}>
                                Clear
                            </button>
                        )}

                        <Blogs blogsCount={blogsCount} />
                    </div>
                </div>
                <div className={Styles.product}>
                    <Blog blogsCount={blogsCount} searchQuery={searchQuery} />
                </div>

                <div className={Styles.btn}>
                    <button onClick={loadMoreBlogs}>View More <AiOutlineRight /></button>
                </div>
            </div>

            <Footer />
        </>
    );
}


export default Blog;