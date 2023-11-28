import React, { useState } from 'react';
import Styles from './Register.module.css';
import { Link } from 'react-router-dom';

function Register() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for error messages
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Validation functions
  const validateEmail = () => {
    // Basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(isValid ? '' : 'Invalid email address');
  };

  const validateUsername = () => {
    setUsernameError(username ? '' : 'Username is required');
  };

  const validatePassword = () => {
    setPasswordError(password ? '' : 'Password is required');
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordError(
      confirmPassword === password ? '' : 'Passwords do not match'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    validateEmail();
    validateUsername();
    validatePassword();
    validateConfirmPassword();

    // Proceed with registration if validation passes
    if (email && username && password === confirmPassword) {
      // Add your registration logic here
      console.log('Registration successful');
    }
  };

  return (
    <div className={Styles.body}>
      <div className={Styles.logincontainer}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className={Styles.loginform}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          <span className={Styles.error}>{emailError}</span>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
            required
          />
          <span className={Styles.error}>{usernameError}</span>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            required
          />
          <span className={Styles.error}>{passwordError}</span>

          <label htmlFor="cpassword">Confirm Password:</label>
          <input
            type="password"
            id="cpassword"
            placeholder="Confirm your password.."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            required
          />
          <span className={Styles.error}>{confirmPasswordError}</span>

          <button type="submit" className={Styles.btn3}>
            Register
          </button>

          <h4>
            Already have an account?{' '}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Register;
