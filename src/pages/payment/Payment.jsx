import React from 'react'
import Styles from './Payment.module.css'
import Footer from '../home/Footer';
import Navbar from '../home/Navbar';

function Payment() {
  return (
    <div className={Styles.header}>
      <div className={Styles.navigation}>
        <Navbar backgroundColor="Black" />
        <div className={Styles.Payment}>
          <div className={Styles.Payment1}>
            Product details <i class="fa-solid fa-angle-right"></i> Payment
          <div className={Styles.Payment2}>
            <h3>Select a Payment Method</h3>
          </div>
        





          </div>

        </div>






      </div>
      <Footer/>
    </div>
  )
}
export default Payment;
