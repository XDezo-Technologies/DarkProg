import Styles from './Contact.module.css';
import Navbar from '../home/Navbar';

function Contact() {
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
      </>
    );
  }

export default Contact;
  