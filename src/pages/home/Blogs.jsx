import Styles from './Header.module.css';
import blogs from '../../images/blogs.png';
import profile from '../../images/profile.png';
import {Link} from 'react-router-dom';


function Blogs() {
    return (
        <div className={Styles.container}>
            <div className={Styles.banner}>
              <Link to="/Blog_detail"><img src={blogs} alt="" /></Link> 
            </div>
            <div className={Styles.content}>
                
                    <Link to="/Blog_detail"><div className={Styles.title1}>Which One Is Best? </div></Link>
                   
                <div className={Styles.description1}>Frameworks are ready-to-use collections of libraries, modules, and features that are built on top of other languages.</div>
                <div className={Styles.postedby}>
                    <div className={Styles.pic}>
                        <img src={profile} alt="" />
                    </div>

                    <div className={Styles.info}>
                        <div className={Styles.name}>Alishma Sherchan</div>
                        <div className={Styles.date}>July 2023</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Blogs;