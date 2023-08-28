import Styles from './Contact.module.css';
import React from 'react';

function Contacts() {
    return (
        <div className={Styles.contain}>
          <div className={Styles.heading1}>Contact Us</div>
          <div className={Styles.container}>
            <div className={Styles.left_content}>
                <div className={Styles.info}>Feel free to get in touch with us for any questions, feedback, or support. We're here to assist you!</div>
                <div className={Styles.phone}>Phone Number: <span><a href="tel:+9779827167978">+977 9827167978</a></span></div>
                <div className={Styles.address}>Address: <span>Pokhara-26, Ratnachok</span></div>
                <div className={Styles.email}>Email: <span><a href="mailto:darkprog222@gmail.com">darkprog222@gmail.com</a></span></div>
                            
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
    );
  }

export default Contacts;