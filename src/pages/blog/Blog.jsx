import React, { useState } from 'react';
import Styles from './Blog.module.css';
import Navbar from '../home/Navbar';
import { AiOutlineRight } from 'react-icons/ai';
import Blogs from '../home/Blogs';
import Footer from '../home/Footer';
import { BiSearch } from 'react-icons/bi';


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

            <div className={Styles.blog_section}>
                <div className={Styles.search}>
                    <div className={Styles.heading}>Blogs</div>
                    <div className={Styles.searchbar}>
                    <input className={Styles.searchbutton} placeholder='Search....' onChange={handleSearchChange} value={searchQuery} type="text" />
                    {searchQuery && ( 
                    <button className={Styles.clearButton} onClick={() => setSearchQuery("")}>
                        Clear
                    </button>
                    )}
                    <BiSearch className={Styles.lens} />
                    </div>
                </div>
                <div className={Styles.product}>
                    <Blogs blogsCount = {blogsCount}  searchQuery={searchQuery}/>
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