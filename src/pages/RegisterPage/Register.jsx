import React from 'react'
import Styles from './Register.module.css'
import { Link } from 'react-router-dom';
 function Register() {
  return (
    <div className={Styles.body}>
        <div className={Styles.logincontainer}>
          <h1>Register</h1>
          <form action="" className={Styles.loginform}>

              
              <label htmlFor="username">Email:</label>
              <input type="email" id='email' placeholder='Enter your Email..' required />

              <label htmlFor="username">Username:</label>
              <input type="text" id='username' placeholder='Enter your username..' required />

              <label htmlFor="username">Password:</label>
              <input type="password" id='password' placeholder='Enter your password..' required />


              <label htmlFor="username">Confirm Password:</label>
              <input type="password" id='cpassword' placeholder='Confirm your password..' required />

              <button type='submit' className={Styles.btn3}>Register</button>

              <h4>Already have an account? <span><Link to = "/login">Login</Link></span></h4>

          </form>

      </div>
    </div>

  )
}

export default Register;
