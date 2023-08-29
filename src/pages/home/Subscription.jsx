import React from 'react'
import Styles from '../services/Services.module.css'
import { Link } from 'react-router-dom';


export default function Subscription() {
  return (


    <div className={Styles.Payment}>
        <div className={Styles.Payment1}>
          <h1>Our Plans</h1>
        </div>
        <div className={Styles.Mpayment}>
          <div className={Styles.payment2}>
            <h3>Free</h3>
            <p className={Styles.ptag}>Rs 0/month</p><br />
            <p><i class="fa-solid fa-check"></i> Free Membership</p>
            <p><i class="fa-solid fa-check"></i> 30Gb Storage</p>
            <p><i class="fa-solid fa-check"></i> 1 Personal Email</p> <br />
            <button><Link to="/home">Get Started <i class="fa-solid fa-angle-right"></i> </Link></button>

          </div>

          <div className={Styles.payment3}>
            <h3> Premium</h3>
            <p className={Styles.ptag}>Rs 1000/month</p><br />
            <p><i class="fa-solid fa-check"></i> Free Membership</p>
            <p><i class="fa-solid fa-check"></i> 1000Gb Storage</p>
            <p><i class="fa-solid fa-check"></i> 2 Personal Email</p>
            <p><i class="fa-solid fa-check"></i> 1 FTP Account</p><br/>


            <button><Link to="/payment">Get Started <i class="fa-solid fa-angle-right"></i> </Link></button>
          </div>
        </div>
      </div>
  )
}
