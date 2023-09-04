import React from 'react'
import Styles from './Register.module.css'
import { Link } from 'react-router-dom';
 function Register() {
  return (
    <div className={Styles.logincontainer}>
        <h1>Register</h1>
        <form action="" className={Styles.loginform}>

            
            <label className={Styles.lab} htmlFor="username">Email:</label>
            <input className={Styles.intt} type="email" id='email' placeholder='Enter your Email..' required />

            <label className={Styles.lab} htmlFor="username">Username:</label>
            <input className={Styles.intt} type="text" id='username' placeholder='Enter your username..' required />

            <label className={Styles.lab} htmlFor="username">Password:</label>
            <input className={Styles.intt} type="password" id='password' placeholder='Enter your password..' required />


            <label className={Styles.lab} htmlFor="username">Confirm Password:</label>
            <input className={Styles.intt} type="password" id='cpassword' placeholder='Confirm your password..' required />

            <button type='submit' className={Styles.btn3}>Register</button>

            <h4>Already have an account? <span><Link to = "/login">Login</Link></span></h4>

        </form>

    </div>

  )
}

export default Register;
