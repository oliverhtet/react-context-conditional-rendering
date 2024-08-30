
import React from 'react';
import { useAuth } from '../context/AuthContext';

function Greeting() {
  const { isLoggedIn } = useAuth();

  return <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h1>;
}

export default Greeting;
