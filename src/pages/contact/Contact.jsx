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
                                <i class="fa-brands fa-square-facebook"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;
