import Styles from './Header.module.css';
import blogs from '../../images/blogs.png';
import profile from '../../images/profile.png';
import t1 from '../../images/t1.png';
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
          image: t1,
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
      ];

      const displayedBlog = blog.slice(0, props.blogsCount);
    return (
        <div className={Styles.product}>
            {displayedBlog.map((item, index) => (
                <div className={Styles.container}>
                    <div className={Styles.banner}>
                    <Link to="/Blog_detail"><img src={item.image} alt="" /></Link> 
                    </div>
                    <div className={Styles.content}>
                        
                        <Link to="/Blog_detail"><div className={Styles.title1}>{item.title}</div></Link>
                        
                        <div className={Styles.description1}>{item.desc}</div>
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