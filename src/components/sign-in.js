import React from 'react';

function SignIn() {
  return (
    <form action="">
      <div className="form-inner">
        <h2>Sign in</h2>
        {/* ERROR*/}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
      </div>
    </form>
  );
}
