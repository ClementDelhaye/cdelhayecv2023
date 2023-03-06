import React, { useState } from 'react';
//import { auth } from './firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    //auth.signInWithEmailAndPassword(email, password)
      //.then((userCredential) => {
        // User successfully signed in
      //})
      //.catch((error) => {
        // Handle errors here
      //});
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
