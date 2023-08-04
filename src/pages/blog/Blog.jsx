import Styles from './Blog.module.css';
import Navbar from '../home/Navbar';
import { AiOutlineRight } from 'react-icons/ai';
import Blogs from '../home/Blogs';


function Blog() {
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
                <div className={Styles.product}>
                    <Blogs />
                    <Blogs />
                    <Blogs />
                    

                </div>
                <div className={Styles.product}>
                    <Blogs />
                    <Blogs />
                    <Blogs />

                </div>
                <div className={Styles.product}>
                    <Blogs />
                    <Blogs />
                    <Blogs />

                </div>
                <div className={Styles.btn}>
                    <button>View More <AiOutlineRight /></button>
                </div>
            </div>
        </>
    );
}

export default Blog;
