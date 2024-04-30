import React, { useState } from 'react'; // Use React for state management
import axios from 'axios';
import logo from './Logo/covid4.jpg';

const Login = ({ store }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit() {
    // Validate username and password before sending request (optional)
    if (!username || !password) {
      setErrorMessage('Please enter username and password.');
      return;
    }

    const data = {
      un: username,
      pw: password
    };

    axios.post('http://localhost:8081/check', data)
      .then((response) => {
        console.log(response.data);
        if (response.data === "fail") {
          setErrorMessage('Invalid Username or Password');
        } else {
          store.dispatch({ type: "login", data: { un: response.data.name, role: response.data.role } });
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('An error occurred. Please try again later.'); // Generic error message
      });
  }

  function handleMouseOver() {
    document.getElementById("idlogin").style.boxShadow = "10px 10px 15px grey";
  }

  function handleMouseLeave() {
    document.getElementById("idlogin").style.boxShadow = "0px 0px 0px grey";
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    setErrorMessage(''); // Clear error message when username changes
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setErrorMessage(''); // Clear error message when password changes
  }

  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div id="idlogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{  backgroundColor:'lightgrey', width: '300px',height:'400px', margin: '10px', padding: '50px', border: '3px black', borderRadius: '10px', alignItems:'center'}}>
        <p style={{ textShadow: "2px 4px 4px black", color: "black", fontSize: "40px", textAlign: 'center' }}>Login Page</p><br />
        <p style={{ fontSize: "20px", textAlign: 'center' }}>Enter Your Credentials</p>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="un"
          id="username"
          value={username} // Bind state value to input
          onChange={handleUsernameChange} // Handle username changes
          style={{backgroundColor:'pink', width: '300px', padding: '5px', fontSize: '16px', margin: '5px 0',borderRadius:'5px'}}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="pw"
          id="password"
          value={password} // Bind state value to input
          onChange={handlePasswordChange} // Handle password changes
          style={{ backgroundColor:'pink',width: '300px', padding: '5px', fontSize: '16px', margin: '5px 0',borderRadius:'5px' }}
        />

        {errorMessage && <p style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>{errorMessage}</p>}

        <button style={{backgroundColor:'lightsteelblue', color: "black",width:'250px',height:'30px', fontSize: "20px", textAlign: 'center' }} onClick={handleSubmit}>Login</button>
      <p><href>don't have an account SignUp</href></p>
      </div>
    </div>
  );
};

export default Login;