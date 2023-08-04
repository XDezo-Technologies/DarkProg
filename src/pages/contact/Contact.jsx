import Styles from './Contact.module.css';
import Navbar from '../home/Navbar';

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

                <div className={Styles.Section}>
                    <div className={Styles.heading}>
                        Get In Touch With Us.
                    </div>

                    <div className={Styles.content}>
                        <div className='info'>
                            <p>Feel free to get in touch with us for any question, feedback, or support. We're here to assits you!</p>
                            <h5>Phone Number: <span>+977 9832487278</span></h5>
                            <h5>Address: <span>Pokhara-26</span></h5>
                            <h5>Phone Number: <span>+977 9832487278</span></h5>
                            <div>
                                <i class="fa-brands fa-square-facebook"></i> <i class="fa-brands fa-square-twitter"></i> <i class="fa-brands fa-square-youtube"></i>
                            </div>
                        </div>

                        <div className='details'>
                            <form action="">
                                <input type="text" placeholder='Name..' />
                                <input type="email" placeholder='Email..' />
                                <input type="text" placeholder='Subject..' />
                                <input type="submit" placeholder='Message...' />
                                
                            </form>

                        </div>

                    </div>

                </div>

                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.066171319928!2d83.9616364!3d28.205302099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951b4c297003%3A0x154f5b2110323833!2sLakeside%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1691131715536!5m2!1sen!2snp" width="1510" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
}

export default Contact;
