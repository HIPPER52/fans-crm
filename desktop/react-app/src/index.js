import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Admin {
  constructor() {
    this._isAuth = false;
    this._admin = {};
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setAdmin(admin) {
    this._admin = admin;
  }

  get isAuth() {
    return this._isAuth;
  }
  get admin() {
    return this._admin;
  }
}

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ admin: new Admin() }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
