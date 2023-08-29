import Blogs from './Blogs';
import Contacts from './Contacts';
import Footer from './Footer';
import Styles from './Header.module.css';
import Navbar from './Navbar';
import Product from './Product';
import { AiOutlineRight } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Subscription from './Subscription';



function Header() {
    return (
      <>
        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar />
                <div className={Styles.hero_section}>
                    <div className={Styles.title}>discover your perfect website <br /> template</div>
                    <div className={Styles.wellcome_message}>
                        Welcome to Darkprog, where creativity meets functionality. We offer a curated <br /> 
                        collection of exquisite website templates to cater to all your online needs. 
                    </div>
                    
                      <Link to ="/Products"><button className={Styles.button}>Browse Template</button></Link>
                      
                </div>
            </div>
        </div>

        <div className={Styles.work}>
          <div className={Styles.unique}>
            <div className={Styles.icon}></div>
            <div className={Styles.content}>
              <div className={Styles.description}>Expert Developer</div>
              <div className={Styles.desc}>Designed by <br /> Expert developer</div>
            </div>
          </div>

          <div className={Styles.unique}>
            <div className={Styles.icon}></div>
            <div className={Styles.content}>
              <div className={Styles.description}>Expert Developer</div>
              <div className={Styles.desc}>Designed by <br /> Expert developer</div>
            </div>
          </div>

          <div className={Styles.unique}>
            <div className={Styles.icon}></div>
            <div className={Styles.content}>
              <div className={Styles.description}>Expert Developer</div>
              <div className={Styles.desc}>Designed by <br /> Expert developer</div>
            </div>
          </div>
        </div>

        <div className={Styles.product_section}>
          <div className={Styles.heading}>Multi-Purpose Templates</div>
            <Product productsCount =  {3}/>
          <div className={Styles.btn}>  
            <Link to="/Products"><button>View More <AiOutlineRight /></button></Link>     
          </div>
        </div>

        <div className={Styles.product_section1}>
          <div className={Styles.heading1}>From The Blog</div>
          <Blogs blogsCount = {3} />
          <div className={Styles.btn}>

            <Link to="/Blog"><button>View More <AiOutlineRight /></button></Link>
          </div>
        </div>
        < Subscription/>
        <Contacts />
        <Footer />
      </>
    );
  }

export default Header;
  