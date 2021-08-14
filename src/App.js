import React, { useState } from 'react';
import './style.css';

export default function App() {
  const user = {
    email: 'tranphuong@gmail.com',
    password: '123456'
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const login = detail => {
    console.log(detail);
  };

  return (
    <div className="App">
      {(user.email != '')(
        <div className="welcome">
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button>Sign out</button>
        </div>
      )}
    </div>
  );
}
