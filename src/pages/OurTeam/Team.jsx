import React from 'react'
import Styles from './Team.module.css';
import Navbar from '../home/Navbar';
import CEO from '../../images/CEO.png';
import Footer from '../home/Footer';
import Member from './Member';
import t1 from '../../images/t1.png';
import t2 from '../../images/t2.png';
import about from '../../images/about.png';


function Team() {
  return (
        <>
        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar />
                <div className={Styles.hero_section}>
                    <div className={Styles.title}>Our Team</div>
                </div>
            </div>
        </div>

        <div className={Styles.ceo}>
            <div className={Styles.profile}>
                <img className={Styles.owner} src={CEO} alt="" />
            </div>
            <div className={Styles.message}>
                <div className={Styles.heading}>
                    Company's CEO
                </div>
                <p>
                “I hope this message finds you well. First and foremost, I want to express my gratitude for your hard work and dedication in ensuring that our clients receive top-notch content for their websites. Your efforts play a crucial role in the success of our e-commerce business, and I am truly proud of the exceptional content you create.
                As we continue to grow and expand our clientele, it is essential that we maintain the highest standards of quality and professionalism in every piece of content we produce. Our goal is to not only meet but exceed our clients' expectations, providing them with engaging, informative, and persuasive content that truly represents their brand and drives results.” <br />
                Ram Babu
                </p>
            </div>
        </div>

        <div className={Styles.team}>
            <div className={Styles.heading}>
                Our Team
            </div>

            <div className={Styles.members}>
                <Member image={t1} post='Company Manager' name = 'Hari prashad'/>
                <Member image={t2} post='Graphic designer' name = 'Hetlar maya' />
                <Member image={about} post='Disital Marketing' name = 'Prashad Bahadur'/>
                <Member image={t1} post='Company Manager' name = 'Hari prashad'/>
                <Member image={t2} post='Graphic designer' name = 'Hetlar maya' />
                <Member image={about} post='Disital Marketing' name = 'Prashad Bahadur'/>
            </div>


        </div>

        

        <Footer />
        </>
  )
}

export default Team;
