import React from 'react'
import Navbar from '../home/Navbar'
import blogs from '../../images/blogs.png'
import { AiOutlineRight } from 'react-icons/ai';
import Styles from './Blog_detail.module.css';
import Footer from '../home/Footer';

function Blog_detail() {
    return (
        <>
            <div>
                <Navbar backgroundColor="black" />
                <div className={Styles.breadcrum}>Blog <i class="fa-solid fa-angle-right"></i> <span>Blog Details</span></div>
                <div className={Styles.container}>

                    <div className={Styles.leftbar}>
                        <img src={blogs} alt="" />
                        <div className={Styles.details}>
                            <h1>Which one is better?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, in sint aspernatur magni fugit dolorem nisi blanditiis amet, architecto quis molestias tempore inventore voluptatum. Similique quaerat quo fuga ratione cumque praesentium, sunt eum voluptate tempora totam mollitia maiores magnam soluta dolor. Molestias quisquam assumenda fugiat quos officia quaerat, beatae nostrum consequatur libero delectus distinctio. Molestias reprehenderit dicta nihil accusamus deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, voluptates quo quas temporibus voluptas deserunt praesentium maxime laboriosam itaque natus!</p>

                            <div className={Styles.message_box}>
                                <form action="">
                                    <input placeholder='Name' type="text" />
                                    <textarea placeholder='Your Message' type="text" />
                                </form>

                            </div>
                        </div>
                    </div>

                    <div className={Styles.rightbar}>
                        <h1 className={Styles.latest}>Latest Blogs</h1>

                        <div className={Styles.main}>
                            <div className={Styles.sidebar_img}>
                                <img src={blogs} alt="" />
                                <h5>Angular Vs. Flutter for Web And Mobile App Development Know Which One Is Best?</h5>
                                <p>May 13, 2023</p>
                            </div>
                            <div className={Styles.sidebar_img}>
                                <img src={blogs} alt="" />
                                <h5>Angular Vs. Flutter for Web And Mobile App Development Know Which One Is Best?</h5>
                                <p>May 13, 2023</p>
                            </div>
                            <div className={Styles.sidebar_img}>
                                <img src={blogs} alt="" />
                                <h5>Angular Vs. Flutter for Web And Mobile App Development Know Which One Is Best?</h5>
                                <p>May 13, 2023</p>
                            </div>
                        </div>

                        <div className={Styles.btn}>
                            <button>View More <AiOutlineRight /></button>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />

        </>
    )
}
export default Blog_detail;
