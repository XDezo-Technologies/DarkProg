import React from 'react'
import Navbar from '../home/Navbar';
import Footer from '../home/Footer'
import Styles from './Productdetailspage.module.css'
function Productdetailspage() {
    return (

        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar backgroundColor="Black"/>
                <div className='productdetails'>
                    <div className='pdh'>
                        Product / Product Details
                    </div>
                </div>
            </div>
        </div>








    );
}
export default Productdetailspage;
