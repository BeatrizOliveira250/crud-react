
import React, { useState, useContext} from 'react';
import { authContext } from '../contexts/AuthContext';

const SignIn = ({history}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setAuthData } = useContext(authContext);

  const onFormSubmit = e => {
    e.preventDefault();
    setAuthData(email);
    history.replace('/');
  };
  return (
    <div
      className="content"
    >
      <div >
        <h1 className="text-center">Sign in</h1>
        <form onSubmit={onFormSubmit}>
          <div className="group" >
            <label>Email address</label>
            <div className="control"
              type="email"
              placeholder="Enter email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="group">
            <label>Password</label>
            <div className="control"
              type="password"
              placeholder="Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
