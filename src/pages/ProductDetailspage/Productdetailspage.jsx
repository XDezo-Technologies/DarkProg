import React from 'react'
import Navbar from '../home/Navbar';
import Footer from '../home/Footer'
import Styles from './Productdetailspage.module.css'
import webproduct from '../../images/webproduct.png'
function Productdetailspage() {
    return (

        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar backgroundColor="Black" />
                <div className={Styles.productdetails}>
                    <div className={Styles.pdh}>
                        Product / Product Details
                    </div>
                    <div className={Styles.products}>
                        <div className={Styles.productimg}>
                            <img src={webproduct} alt="" />
                        </div>
                        <div className={Styles.productd}>
                            <h3>Product Name</h3>
                            <p>Rs30000</p>

                            <button>BuyNow</button> <br />

                            <button>Add to cart</button>

                            <p>Categories: E-commerce</p>


                        </div>
                    </div>

                    <div className={Styles.Content}>
                        <div className={Styles.content1}>
                            <h1>Trend Website Design</h1>
                        </div>
                        <div className={Styles.content2}>
                            <p>For your business, too, your customers’ wins are your wins. If you’re a small retailer, this is true not just with your in-store customer service, but also your e-commerce website’s overall UX, its check-out flow, your online return options, and your product descriptions. By writing accurate, educational, and engaging product descriptions, a copywriter serves their customers just as much as a sales associate does when someone walks through your shop’s front door. For your business, too, your customers’ wins are your wins. If you’re a small retailer, this is true not just with your in-store customer service, but also your e-commerce website’s overall UX, its check-out flow, your online return options, and your product descriptions. By writing accurate, educational, and engaging product descriptions, a copywriter serves their customers just as much as a sales associate does when someone walks through your shop’s front door.
                                For your business, too, your customers’ wins are your wins. If you’re a small retailer, this is true not just with your in-store customer service, but also your e-commerce website’s overall UX, its check-out flow, your online return options, and your product descriptions. By writing accurate, educational, and engaging product descriptions, a copywriter serves their customers just as much as a sales associate does when someone walks through your shop’s front door.</p>
                        </div>

                    </div>

                    <div className='Relatedp'>
                        <div className=''>

                        </div>
                    </div>



                </div>
            </div>
            <Footer/>
        </div>







        
    );
}

export default Productdetailspage;
