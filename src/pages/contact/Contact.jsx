import Styles from './Contact.module.css';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

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


                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.066171319928!2d83.9616364!3d28.205302099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951b4c297003%3A0x154f5b2110323833!2sLakeside%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1691131715536!5m2!1sen!2snp" width="1510" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Contact;
