import React, { useState } from 'react';
import SignIn from './components/sign-in';

export default function App() {
  const adminUser = {
    email: 'tranphuong@gmail.com',
    password: '123456'
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const signin = value => {
    console.log(value);
  };

  return (
    <div className="App">
      {user.email != '' ? (
        <div className="welcome">
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button>Sign out</button>
        </div>
      ) : (
        <SignIn Signin={signin} error={error} />
      )}
    </div>
  );
}
