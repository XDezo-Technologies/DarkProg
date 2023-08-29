import React, { useState } from 'react'
import Styles from './Payment.module.css'
import Footer from '../home/Footer';
import Navbar from '../home/Navbar';
import payment from '../../images/payment.png';
import { useNavigate } from 'react-router-dom';


function Payment() {

  const options = [
    {
      image: payment,
      subItems: "Debit/Credit Card",
    },
    {
      image: payment,
      subItems: "eShewa Wallet",
    },
    {
      image: payment,
      subItems: "IME Fone Pay",
    },
    {
      image: payment,
      subItems: "Khalti Wallet",
    },
  ];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
const navigate = useNavigate();
    
  return (

    <div className={Styles.pay}>
      <Navbar backgroundColor="black" />
      <div className={Styles.payment}>
        <div className={Styles.back}><div className={Styles.pd} onClick={() => navigate(-1)}>Product details</div><i class="fa-solid fa-angle-right"></i><span> Payment </span> </div>
        <div className={Styles.method}>Select a Payment Method</div>
      </div>

      <div className={Styles.options}>
        {options.map((option, index) => (
          <div key={index} className={`${Styles.card} ${
            selectedOptionIndex === index ? Styles.selected : ''
          }`} onClick={() => setSelectedOptionIndex(index)}>
            <img className={Styles.img} src={option.image} alt="" />
            <p className={Styles.wallet}>{option.subItems}</p>
          </div>
        ))}
    </div>

    {selectedOptionIndex === 0 && (
            <div className={Styles.paymentdetail}>
            <form action="">
              <label htmlFor="cardnumber">Card Number</label>
              <input className={Styles.input} type="text" placeholder='Card Number' />
      
              <label htmlFor="cardnumber">Name on Card</label>
              <input className={Styles.input} type="text" placeholder='Name' />
      
              <div className={Styles.ec}>
                <div className={Styles.expire}>
                  <label htmlFor="cardnumber">Expaire Date</label>
                  <input className={Styles.input} type="text" placeholder='Expaire Date' />
                </div>
      
                <div className={Styles.cvv}>
                  <label htmlFor="cardnumber">CVV</label>
                  <input className={Styles.input} type="text" placeholder='CVV' />
                </div>
              </div>
            </form>
      
            <div className={Styles.agreement}>
                <div><input className={Styles.check} type="checkbox" /></div>
                <div className={Styles.agree}>
                  Save Card <br /> <div className={Styles.p}>I acknowledge that my card information <br /> is saved in my Daraz account for <br /> subsequent transactions.</div>
                </div>
            </div>
      
            <button className={Styles.btn2}>Pay Now</button>
          </div>
      )}

      {selectedOptionIndex === 1 && (
            <div className={Styles.paymentdetail1}>
            <div>
            You will be redirected to your eSewa account to complete your payment: <br />
            1. Login to your eSewa account using your eSewa ID and your Password <br />
            2. Ensure your eSewa account is active and has sufficient balance <br />
            3. Enter OTP (one time password) sent to your registered mobile number <br />
            ***Login with your eSewa mobile and PASSWORD (not MPin)***
            </div>
      
            <button className={Styles.btn2}>Pay Now</button>
          </div>
      )}

      
      {selectedOptionIndex === 2 && (
            <div className={Styles.paymentdetail1}>
            <div>
            You will be redirected to your Khalti account to complete your payment: <br />
            1. Login to your eSewa account using your eSewa ID and your Password <br />
            2. Ensure your eSewa account is active and has sufficient balance <br />
            3. Enter OTP (one time password) sent to your registered mobile number <br />
            ***Login with your eSewa mobile and PASSWORD (not MPin)***
            </div>
      
            <button className={Styles.btn2}>Pay Now</button>
          </div>
      )}

      
      {selectedOptionIndex === 3 && (
            <div className={Styles.paymentdetail1}>
            <div>
            You will be redirected to your IME account to complete your payment: <br />
            1. Login to your eSewa account using your eSewa ID and your Password <br />
            2. Ensure your eSewa account is active and has sufficient balance <br />
            3. Enter OTP (one time password) sent to your registered mobile number <br />
            ***Login with your eSewa mobile and PASSWORD (not MPin)***
            </div>
      
            <button className={Styles.btn2}>Pay Now</button>
          </div>
      )}

      <Footer />
    </div>
  )
}

export default Payment;
