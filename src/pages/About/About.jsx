import React, { useState } from 'react'
import Styles from './About.module.css'
import Navbar from '../home/Navbar';
import about from '../../images/about.png';
import Footer from '../home/Footer';
import alishma from '../../images/alishma.png'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import BackToTopButton from '../backToTop/Backtotop';

function About() {

  const reviews = [
    {
      name : "Alishma Sherchan",
      review : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
    },
    {
      name : "Buddhi Raj Gurung",
      review : "Cool",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
    const goToPreviousReview = () => {
      setCurrentReviewIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
    };
  
    const goToNextReview = () => {
      setCurrentReviewIndex((prevIndex) => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
    };
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
                <img className={Styles.owner} src={about} alt="" />
            </div>
            <div className={Styles.message}>
                <div className={Styles.heading}>
                    About Us
                </div>
                <p className={Styles.par}>
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
          <div className={Styles.left} onClick={goToPreviousReview}>
            <AiOutlineLeft className={Styles.icons} />
          </div>
          <div key={currentReviewIndex} className={Styles.box}>
            <div className={Styles.photo}>
              <img className={Styles.img} src={alishma} alt="" />
            </div>
            <div className={Styles.name}>{reviews[currentReviewIndex].name}</div>
            <div className={Styles.star}>*****</div>
            <div className={Styles.review}>{reviews[currentReviewIndex].review}</div>
          </div>
          <div className={Styles.right} onClick={goToNextReview}>
            <AiOutlineRight className={Styles.icons} />
          </div>
        </div>

        <Footer />
        <BackToTopButton />
    </>
  )
}
export default About;
