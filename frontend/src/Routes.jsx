import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import { Landing } from "./Landing/Landing";
import { Register } from "./Register/Register";
import { Book } from "./Book";
import { ProfilePage } from "./Profile/ProfilePage";
// import { Login, Register } from "./Accounts";
// import { Page404 } from "./App/Page404";

export default function Routes({ appProps }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} appProps={appProps} />
        <Route path="/home" exact component={Home} appProps={appProps} />
        <Route path="/register" exact component={Register} appProps={appProps} />
        <Route path="/books/:id" component={Book} appProps={appProps} />
        <Route path="/profile" component={ProfilePage} appProps={appProps}/>
        {/* <Route path="/login" exact component={Login} appProps={appProps} /> */}
        {/* <Route
          path="/register"
          exact
          component={Register}
          appProps={appProps}
        /> */}
        {/* ADD CATCH FOR INVALID URLS */}
        {/* <Route component={Page404} /> */}
      </Switch>
    </BrowserRouter>
  );
}
