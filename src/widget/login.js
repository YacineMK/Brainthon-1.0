import React, { useState } from 'react';
import Logo from '../ass/logo.png';
import { TbDoorExit } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials (replace with your actual authentication logic)
    const correctUsername = 'root';
    const correctPassword = 'root';

    if (username === correctUsername && password === correctPassword) {
      // Successful login logic here (e.g., redirect to another page)
      navigate('/'); // Redirect to the Home page
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <img src={Logo} alt='' />
      <br />
      <h1>
        Sign In <span><TbDoorExit /></span>
      </h1>
      <form onSubmit={handleLogin}>
        <label htmlFor='username'>Username :</label><br />
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <label htmlFor='password'>Password :</label><br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        {errorMessage && <div className='error'>{errorMessage}</div>}
        <br />
        <div className='sub'>
          <input id='submit' type='submit' value='Login' />
        </div>
      </form>
    </div>
  );
};

export default Login;
