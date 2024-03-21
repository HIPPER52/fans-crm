import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";

const AppRouter = ({ isAuth }) => {
  return (
    <Switch>
      <Route path="/" exact>
        {!isAuth ? <Redirect to="/login" /> : <Admin />}
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
};

export default AppRouter;
