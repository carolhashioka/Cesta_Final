import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "../pages/SignUp/signup";
import SignIn from "../pages/SignIn/signin";
import Menu from "../pages/Menu/menu";
import Commerce from "../pages/Commerce/commerce";
import MonthlyQuote from "../pages/MonthlyQuote/monthlyQuote";
import Report from "../pages/Report/report";
import { PrivateRoute } from "../routes/privateroutes";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
        <PrivateRoute path="/commerce" component={Commerce} />
        <PrivateRoute path="/menu" component={Menu} />
        <PrivateRoute path="/report" component={Report} />
        <PrivateRoute path="/monthlyquote" component={MonthlyQuote} />
      </Switch>
    </BrowserRouter>
  );
}
