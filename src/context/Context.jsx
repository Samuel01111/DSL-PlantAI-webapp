"use client";

import { createContext } from "react";
import authConfig from '../utils/authConfig'

const Context = createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, register, login, logout } = authConfig();

  return (
    <Context.Provider value={{ isAuthenticated, register, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
