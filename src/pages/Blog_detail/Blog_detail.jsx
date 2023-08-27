import React from 'react'
import Navbar from '../home/Navbar'
import { AiOutlineRight } from 'react-icons/ai';
import Styles from './Blog_detail.module.css';
import Footer from '../home/Footer';
import { Link, useParams } from 'react-router-dom';
import Blogs from '../home/Blogs';
import blogs from '../../images/blogs.png';
import profile from '../../images/profile.png';
import t1 from '../../images/t1.png';


function Blog_detail() {
    const blog = [
        {
          image: blogs,
          image1: profile,
          title : "Which One Is Best? ",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: t1,
          image1: profile,
          title : "Graphic Designer",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: blogs,
          image1: profile,
          title : "Which One Is Best? ",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
            image: blogs,
            image1: profile,
            title : "Which One Is Best? ",
            desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
            name : "Alishma Sherchan",
            postdate : "July 2023",
          },
          {
              image: blogs,
              image1: profile,
              title : "Which One Is Best? ",
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
              name : "Alishma Sherchan",
              postdate : "July 2023",
            },
            {
              image: blogs,
              image1: profile,
              title : "Which One Is Best? ",
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
              name : "Alishma Sherchan",
              postdate : "July 2023",
            },
            {
              image: blogs,
              image1: profile,
              title : "Which One Is Best? ",
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
              name : "Alishma Sherchan",
              postdate : "July 2023",
            },
            {
              image: blogs,
              image1: profile,
              title : "Which One Is Best? ",
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
              name : "Alishma Sherchan",
              postdate : "July 2023",
            },
            {
              image: blogs,
              image1: profile,
              title : "Graphic Designer",
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
              name : "Alishma Sherchan",
              postdate : "July 2023",
            },
            {
              image: blogs,
              image1: profile,
              title : "Which One Is Best? ",
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
              name : "Alishma Sherchan",
              postdate : "July 2023",
            },
      ];

      const { blogId } = useParams();
      const blogdetail = blog[blogId];
    return (
        <>
            <div>
                <Navbar backgroundColor="black" />
                <div className={Styles.breadcrum}>
                    <Link to="/Blog">Blog</Link> <i class="fa-solid fa-angle-right"></i> <span>Blog Details</span></div>
                <div className={Styles.container}>

                    <div className={Styles.leftbar}>
                        <img src={blogs} alt="" />
                        <div className={Styles.details}>
                            <h1>{blogdetail.title}</h1>
                            <p>{blogdetail.desc}</p>

                            <div className={Styles.message_box}>
                                <form action="">
                                    <input placeholder='Name' type="text" />
                                    <textarea placeholder='Your Message' type="text" />
                                    <div className={Styles.btn1}>
                                        <button type='submit'>Send</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                    <div className={Styles.rightbar}>
                        <h1 className={Styles.latest}>Latest Blogs</h1>

                        <div className={Styles.main}>
                            <Blogs blogsCount = {2} />
                        </div>

                        <div className={Styles.btn}>
                            <button ><Link className={Styles.anker} to="/blog">View More</Link><AiOutlineRight /></button>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
export default Blog_detail;
