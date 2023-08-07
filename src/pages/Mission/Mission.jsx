import React from 'react'
import Navbar from '../home/Navbar'
import Styles from './Mission.module.css';
import mission from '../../images/mission.png';
import Footer from '../home/Footer';

function Mission() {
    return (
        <>
         <div>
            <Navbar backgroundColor="black" />

            <div className={Styles.image}>
                <img src={mission} alt="" />
            </div>

            <div className={Styles.heading}>
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid fugiat laborum, earum ab repudiandae inventore vel impedit minus dolorem fugit, soluta quas quisquam, itaque ut ea dicta eaque! Nesciunt qui recusandae nihil excepturi veniam consequuntur aliquid nisi inventore iste, obcaecati officiis est perferendis aliquam numquam quas! Quo ullam expedita, nesciunt cum inventore commodi natus quidem eligendi molestias unde quis iusto quam, minima ab officia quibusdam quia ut dolorum corrupti pariatur!</p>
            </div>
        </div>
        <Footer/>
        
        </>
       
    )
}

export default Mission;