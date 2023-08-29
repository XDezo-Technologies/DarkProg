import React from 'react'
import Navbar from '../home/Navbar'
import Styles from '../Mission/Mission.module.css';
import vision from '../../images/vision.png';
import Footer from '../home/Footer';

export default function Vision() {
    return (
        <>
<>
         <div>
            <Navbar backgroundColor="black" />

            <div className={Styles.top}>
                <h1>Our Vision</h1>
                <p> At DarkProg, we envision a digital landscape where the process of owning a website is a delightful and accessible experience for individuals and businesses alike. Our vision is to provide a platform that simplifies the complexities of website creation. We see a world where individuals, regardless of their technical background, can effortlessly choose, customize, and launch their websites with confidence.</p>
            </div>

            <div className={Styles.image}>
                <img src={vision} alt="" />
            </div>

            <div className={Styles.heading}>
                <h1>Innovation Driving Accessibility:</h1>
                <p>We are dedicated to crafting digital identities that resonate with our clients' visions. Our mission is to provide meticulously designed and user-friendly websites that not only reflect the essence of each business but also engage and captivate visitors.</p>
            </div>

            <div className={Styles.heading}>
                <h1>Unleashing Creative Potential:</h1>
                <p>Our commitment goes beyond aesthetics. We strive to elevate online experiences by offering websites that are not only visually appealing but also functionally robust. Our mission is to empower our clients with websites that load seamlessly, adapt to different devices, and provide an exceptional user journey.</p>
            </div>

            <div className={Styles.heading}>
                <h1>Community and Collaboration:</h1>
                <p>At DarkProg, we believe in the power of partnership. Our mission is to guide our clients throughout their digital voyage, offering expert assistance, customizable solutions, and a seamless journey from website selection to launch.</p>
            </div>

            <div className={Styles.heading}>
                <h1>Empowering Growth:</h1>
                <p>At DarkProg, we believe in the power of partnership. Our mission is to guide our clients throughout their digital voyage, offering expert assistance, customizable solutions, and a seamless journey from website selection to launch.</p>
            </div>

            <div className={Styles.heading}>
                <h1>Join Us in Redefining the Web:</h1>
                <p>We invite you to be part of our mission in redefining the web. Whether you're an entrepreneur with a vision, a creative professional seeking exposure, or an organization aiming to expand your digital footprint, WebCrafters is here to be your companion in the digital realm. <br /><div className={Styles.itallen}>Empowerment, Innovation, Excellence—Welcome to the WebCrafters Mission.</div></p>
            </div>
        </div>
        <Footer/>
        
        </>
        
        </>
       
    )
}
