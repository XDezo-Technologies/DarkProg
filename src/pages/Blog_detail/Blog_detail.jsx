import React from 'react'
import Navbar from '../home/Navbar'
import { AiOutlineRight } from 'react-icons/ai';
import Styles from './Blog_detail.module.css';
import Footer from '../home/Footer';
import { Link, useParams } from 'react-router-dom';
import Blogs from '../home/Blogs';
import blogs from '../../images/blogs.png';
import profile from '../../images/profile.png';
import blog1 from '../../images/blog1.png';
import blog2 from '../../images/blog2.png';
import blog3 from '../../images/blog3.png';
import blog4 from '../../images/blog4.png';
import blog5 from '../../images/blog5.png';
import blog6 from '../../images/blog6.png';
import blog7 from '../../images/blog7.png';
import blog8 from '../../images/blog8.png';
import blog9 from '../../images/blog9.png';
import blog10 from '../../images/blog10.png';
import blog11 from '../../images/blog11.png';
import blog12 from '../../images/blog12.png';
import BackToTopButton from '../backToTop/Backtotop';


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
      image: blog1,
      image1: profile,
      title : "Graphic Designer",
      desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
      name : "Alishma Sherchan",
      postdate : "July 2023",
    },
    {
      image: blog2,
      image1: profile,
      title : "Which One Is Best? ",
      desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
      name : "Alishma Sherchan",
      postdate : "July 2023",
    },
    {
        image: blog3,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog4,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog5,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog6,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog7,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog8,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog9,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog10,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
        image: blog11,
        image1: profile,
        title : "Which One Is Best? ",
        desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
        name : "Alishma Sherchan",
        postdate : "July 2023",
      },
      {
          image: blog12,
          image1: profile,
          title : "Which One Is Best? ",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: blog8,
          image1: profile,
          title : "Which One Is Best? ",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: blog5,
          image1: profile,
          title : "Which One Is Best? ",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: blog2,
          image1: profile,
          title : "Which One Is Best? ",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: blog3,
          image1: profile,
          title : "Graphic Designer",
          desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.  ",
          name : "Alishma Sherchan",
          postdate : "July 2023",
        },
        {
          image: blog1,
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
                        <img src={blogdetail.image} alt="" />
                        <div className={Styles.details}>
                            <h1>{blogdetail.title}</h1>
                            <p>{blogdetail.desc}</p>
                            <h4>- {blogdetail.name}</h4>

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
            <BackToTopButton />
        </>
    );
}
export default Blog_detail;
