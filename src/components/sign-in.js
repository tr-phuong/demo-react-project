import React, { useState } from 'react';

function SignIn({ Signin, error }) {
  const [value, setValue] = useState({ name: '', email: '', password: '' });

  const submitHandler = e => {
    e.preventDefault();

    Signin(value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Sign in</h2>
        {/* ERROR*/}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => setValue({ ...value, name: e.target.value })}
            value={value.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Sign in</button>
      </div>
    </form>
  );
}

export default SignIn;
