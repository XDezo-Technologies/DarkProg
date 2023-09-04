import React from 'react'
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';

 function LoginPage() {
  return (

    <div className={Styles.logincontainer}>
        <h1>Login</h1>
        <form action="" className={Styles.loginform}>
            <label className={Styles.lab} htmlFor="username">Username:</label>
            <input className={Styles.intt} type="text" id='username' placeholder='Enter your username..' required />

            <label className={Styles.lab} htmlFor="username">Password:</label>
            <input className={Styles.intt} type="password" id='password' placeholder='Enter your password..' required />

    <div className={Styles.body}>
          <div className={Styles.logincontainer}>
            <h1>Login</h1>
            <form action="" className={Styles.loginform}>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' placeholder='Enter your username..' required />

                <label htmlFor="username">Password:</label>
                <input type="password" id='password' placeholder='Enter your password..' required />


                <p>Forgot Password?</p>

                <Link to = "/"><button type='submit' className={Styles.btn4}>Login</button></Link>

                <h4>Don't have an account? <span><Link to = "/register">Register</Link></span></h4>

            </form>

        </div>
    </div>
  )
}

export default LoginPage;
