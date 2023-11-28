import React, { useState } from 'react';
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  // State for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State for error messages
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validation functions
  const validateUsername = () => {
    setUsernameError(username ? '' : 'Username is required');
  };

  const validatePassword = () => {
    setPasswordError(password ? '' : 'Password is required');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    validateUsername();
    validatePassword();

    // Proceed with login if validation passes
    if (username && password) {
      // Add your login logic here
      console.log('Login successful');
    }
  };

  return (
    <div className={Styles.body}>
      <div className={Styles.logincontainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={Styles.loginform}>
          <label className={Styles.lab} htmlFor="username">
            Username:
          </label>
          <input
            className={Styles.intt}
            type="text"
            id="username"
            placeholder="Enter your username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
            required
          />
          <span className={Styles.error}>{usernameError}</span>

          <label className={Styles.lab} htmlFor="password">
            Password:
          </label>
          <input
            className={Styles.intt}
            type="password"
            id="password"
            placeholder="Enter your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            required
          />
          <span className={Styles.error}>{passwordError}</span>

          <p>Forgot Password?</p>

          <button type="submit" className={Styles.btn4}>
            Login
          </button>

          <h4>
            Don't have an account?{' '}
            <span>
              <Link to="/register">Register</Link>
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
