import Styles from './Contact.module.css';
import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <>
        <div className={Styles.footer}>
          <div className={Styles.left}>
            <div className={Styles.darkprog}>DarkProg</div>
            <div className={Styles.about}>Don't settle for a mediocre online presence. Elevate your brand with our exceptional website templates. Explore our collection now and unlock the potential of your online journey.</div>
            <div className={Styles.icons}>
                <BsFacebook />
                <AiOutlineInstagram />
                <AiFillTwitterSquare />
                <AiFillLinkedin />
            </div>
          </div>

          <div className={Styles.middle}>
            <ul>
                <li className={Styles.li}>Lisense</li>
                <li className={Styles.li}>FAQ</li>
                <li className={Styles.li}>About Us</li>
                <li className={Styles.li}>Products</li>
                <li className={Styles.li}>Decentralised Website Builder</li>
            </ul>
          </div>

          <div className={Styles.right}>
          <ul>
                <div className={Styles.designer}>Are You a designer?</div>
                <li className={Styles.li}>Add your design.</li>
                <li className={Styles.li}>Signup as a creater</li>
                <li className={Styles.li}>Members</li>
            </ul>
          </div>
        </div>

        <div className={Styles.copyright}>
            <div className={Styles.rights}>
            © All rights reserved by DarkProg limited
            </div>
            <div className={Styles.help}>
                <div className={Styles.center}>
                    Help Center            
                </div>
                <div className={Styles.policy}>
                    Privacy policy
                </div>
                <div className={Styles.terms}>
                    Terms & Conditions
                </div>
            </div>
        </div>
        </>
    );
  }

export default Footer;