import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_SIGNUP_API_ENDPOINT', { email, password });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
