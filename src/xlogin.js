import React, { useState } from 'react';

const XLogin = () => {
  // State to hold input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State to hold success/failure message
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default XLogin;
