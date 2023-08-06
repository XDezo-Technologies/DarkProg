import Styles from './Contact.module.css';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

function Contact() {
    return (
        <>
            <div className={Styles.header}>
                <div className={Styles.navigation}>
                    <Navbar />
                    <div className={Styles.hero_section}>
                        <div className={Styles.title}>Contact Us </div>
                    </div>
                </div>
            </div>

            <div className={Styles.contain}>
          <div className={Styles.heading1}>Get in Touch with us</div>
          <div className={Styles.container}>
            <div className={Styles.left_content}>
                <div className={Styles.info}>Feel free to get in touch with us for any questions, feedback, or support. We're here to assist you!</div>
                <div className={Styles.phone}>Phone Number: <span>+977 9827167978</span></div>
                <div className={Styles.address}>Address: <span>Pokhara-26, Ratnachok</span></div>
                <div className={Styles.email}>Email: <span>darkprog222@gmail.com</span></div>
                <div className={Styles.icons}>
                <BsFacebook />
                <AiOutlineInstagram />
                <AiFillTwitterSquare />
                <AiFillLinkedin />
            </div>
            </div>
            <div className={Styles.right_content}>
              <form action="">
                <input placeholder='Your Name' type="text" />
                <input placeholder='Your Email' type="text" />
                <textarea placeholder='Your message' type="text" />
                <div className={Styles.btn1}>
                  <button type='submit'>Send</button>
                </div>
              </form>
            </div>
            </div>
        </div>

        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.066171319928!2d83.9616364!3d28.205302099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951b4c297003%3A0x154f5b2110323833!2sLakeside%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1691131715536!5m2!1sen!2snp" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Footer />
        </>
    );
}

export default Contact;
