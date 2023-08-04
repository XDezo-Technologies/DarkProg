import Styles from './Contact.module.css';
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      };
    return (
        <div className={Styles.container}>
            <div className={Styles.left_content}>
                <div className={Styles.info}>Feel free to get in touch with us for any questions, feedback, or support. We're here to assist you!</div>
                <div className={Styles.phone}>Phone Number: <span>+977 9827167978</span></div>
                <div className={Styles.address}>Address: <span>Pokhara-26, Ratnachok</span></div>
                <div className={Styles.email}>Email: darkprog222@gmail.com</div>
            </div>
            <div className="right_content">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
  }

export default Contact;