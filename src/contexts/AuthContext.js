import React, { createContext, useState, useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
// we will use loading later


  const setAuthData = (data) => {
    setAuth({data: data});
  };

  useEffect(() => {
    setAuth({ loading: false, data: JSON.parse(window.localStorage.getItem('authData'))});
  }, []);

  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
