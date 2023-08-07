import React from 'react'
import Navbar from '../home/Navbar';
import Footer from '../home/Footer'
import Styles from './Productdetailspage.module.css'
import webproduct from '../../images/webproduct.png'
function Productdetailspage() {
    return (

        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar backgroundColor="Black"/>
                <div className={Styles.productdetails}>
                    <div className={Styles.pdh}>
                        Product / Product Details
                    </div>
                    <div className={Styles.products}>
                    <div className={Styles.productimg}>
                        <img src={webproduct} alt="" />
                    </div>
                    <div className={Styles.productd}>
                        <h6>Product Name</h6>
                        <p>Rs30000</p>

                        <button>BuyNow</button> <br/>
                        
                        <button>Add to cart</button>

                        <p>Categories: E-commerce</p>
                    </div>
                    </div>


                </div>
            </div>
        </div>








    );
}
export default Productdetailspage;
