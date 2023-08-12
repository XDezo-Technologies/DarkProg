import React from 'react'
import Styles from './About.module.css'
import Navbar from '../home/Navbar';
import about from '../../images/about.png';
import Footer from '../home/Footer';
import alishma from '../../images/alishma.png'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

function About() {
  return (
    <>
            <div className={Styles.header}>
                <div className={Styles.navigation}>
                    <Navbar />
                    <div className={Styles.hero_section}>
                        <div className={Styles.title}>About Us </div>
                    </div>
                </div>
            </div>

        <div className={Styles.ceo}>
            <div className={Styles.profile}>
                <img src={about} alt="" />
            </div>
            <div className={Styles.message}>
                <div className={Styles.heading}>
                    About Us
                </div>
                <p>
                “I hope this message finds you well. First and foremost, I want to express my gratitude for your hard work and dedication in ensuring that our clients receive top-notch content for their websites. Your efforts play a crucial role in the success of our e-commerce business."
                </p>
            </div>
        </div>

        <div className={Styles.heading}>
            Acheivement And Awards
        </div>

        <div className={Styles.acheivement}>
          <div className={Styles.a1}>
            <span className={Styles.span}>+500 Active users</span> <br /> Contrary to popular belief, Lorem Ipsum is not simply random text
          </div>

          <div className={Styles.a1}>
            <span className={Styles.span}>+500 Active users</span> <br /> Contrary to popular belief, Lorem Ipsum is not simply random text
          </div>

          <div className={Styles.a1}>
            <span className={Styles.span}>+500 Active users</span> <br /> Contrary to popular belief, Lorem Ipsum is not simply random text
          </div>
        </div>

        <div className={Styles.heading}>
            What Customer Say About Us
        </div>

        <div className={Styles.feedback}>
          <div className={Styles.left}>
            <AiOutlineLeft className={Styles.icons} />
          </div>
          <div className={Styles.box}>
            <div className={Styles.photo}>
              <img className={Styles.img} src={alishma} alt="" />
            </div>

            <div className={Styles.name}>
              Alishma
            </div>

            <div className={Styles.star}>
              *****
            </div>
            <div className={Styles.review}>
              Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text
            </div>
          </div>
          <div className={Styles.right}>
            <AiOutlineRight className={Styles.icons} />
          </div>
        </div>

        <Footer />
    </>
  )
}
export default About;
