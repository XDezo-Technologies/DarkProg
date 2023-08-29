import React from 'react'
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';

 function LoginPage() {
  return (
    <div className={Styles.logincontainer}>
        <h1>Login</h1>
        <form action="" className={Styles.loginform}>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' placeholder='Enter your username..' required />

            <label htmlFor="username">Password:</label>
            <input type="password" id='password' placeholder='Enter your password..' required />

            <p>Forgot Password?</p>

            <button type='submit' className={Styles.btn3}>Login</button>

            <h4>Don't have an account? <span><Link to = "/register">Register</Link></span></h4>

        </form>

    </div>
  )
}

export default LoginPage;
