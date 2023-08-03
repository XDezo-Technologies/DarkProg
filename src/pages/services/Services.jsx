import Navbar from '../home/Navbar';
import Styles from './Services.module.css'

function Services() {
    return (
      <>
        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar />
                <div className={Styles.hero_section}>
                    <div className={Styles.title}>Our Servises</div>
                    {/* <div className={Styles.wellcome_message}>
                        Welcome to Darkprog, where creativity meets functionality. We offer a curated <br /> 
                        collection of exquisite website templates to cater to all your online needs. 
                    </div>
                    <button className={Styles.button}>Browse Template</button> */}
                </div>
            </div>
        </div>
      </>
    );
  }

export default Services;
  