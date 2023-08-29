import Styles from './Header.module.css';
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
import {Link} from 'react-router-dom';


function Blogs(props) {
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
              desc : "Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.",
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
      const displayedBlog = blog
          .filter((item) =>
            item.title.toLowerCase().includes(props.searchQuery?.toLowerCase() || "")
          )
          .slice(0, props.blogsCount);

    return (
        <div className={Styles.product}>
            {displayedBlog.map((item, index) => (
                <div className={Styles.container} style={{
                  flex: displayedBlog.length > 2 ? "1 1 300px" : "none"
                }}>
                    <div className={Styles.banner}>
                    <Link to={`/Blog_detail/${index}`}><img src={item.image} alt="" /></Link> 
                    </div>
                    <div className={Styles.content}>
                        
                        <Link to={`/Blog_detail/${index}`}><div className={Styles.title1}>{item.title}</div></Link>
                        
                        <div className={Styles.description1}>{item.desc.split(' ').slice(0, 25).join(' ')}</div>
                        <div className={Styles.postedby}>
                            <div>
                                <img className={Styles.pic} src={item.image1} alt="" />
                            </div>

                            <div className={Styles.info}>
                                <div className={Styles.name}>{item.name}</div>
                                <div className={Styles.date}>{item.postdate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
  }

export default Blogs;