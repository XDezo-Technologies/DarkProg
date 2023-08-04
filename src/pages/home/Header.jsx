import Styles from './Header.module.css';
import Navbar from './Navbar';
import Product from './Product';

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
                    <button className={Styles.button}>Browse Template</button>
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
          <div className={Styles.product}>
            <Product />
          </div>
        </div>
      </>
    );
  }

export default Header;
  