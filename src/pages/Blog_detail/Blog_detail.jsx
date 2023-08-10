import React from 'react'
import Navbar from '../home/Navbar'
import blogs from '../../images/blogs.png'
import Styles from './Blog_detail.module.css';
import Footer from '../home/Footer';

 function Blog_detail() {
  return (
    <>
    <div>
        <Navbar backgroundColor="black" />
        <div className={Styles.container}>

            <div className={Styles.leftbar}>
                <img src={blogs} alt="" />
                <div>
                    <h1>Which one is better?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, in sint aspernatur magni fugit dolorem nisi blanditiis amet, architecto quis molestias tempore inventore voluptatum. Similique quaerat quo fuga ratione cumque praesentium, sunt eum voluptate tempora totam mollitia maiores magnam soluta dolor. Molestias quisquam assumenda fugiat quos officia quaerat, beatae nostrum consequatur libero delectus distinctio. Molestias reprehenderit dicta nihil accusamus deleniti.</p>
                </div>
            </div>

            <div className={Styles.rightbar}>
                <h1>Latest Blogs</h1>
            </div>

        </div>
        <Footer/>
    </div>

    </>
  )
}
export default Blog_detail;
