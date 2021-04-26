import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import { Landing } from "./Landing/Landing";
import { Register } from "./Register/Register";
<<<<<<< HEAD
import { Book } from "./Book";
import { ProfilePage } from "./Profile/ProfilePage";
import { ProfileEditor } from "./Profile/ProfileEditor";
=======
import { Wishlist } from "./Wishlist/Wishlist"
import { Donate } from "./Donate/Donate"
>>>>>>> Cesar
// import { Login, Register } from "./Accounts";
// import { Page404 } from "./App/Page404";

export default function Routes({ appProps }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} appProps={appProps} />
        <Route path="/home" exact component={Home} appProps={appProps} />
        <Route path="/register" exact component={Register} appProps={appProps} />
<<<<<<< HEAD
        <Route path="/books/:id" component={Book} appProps={appProps} />
        <Route path="/profile/edit" component={ProfileEditor} appProps={appProps}/>
        <Route path="/profile/:id" component={ProfilePage} appProps={appProps}/>
=======
        <Route path="/donate" exact component={Donate} appProps={appProps} />
        <Route path="/wishlist" exact component={Wishlist} appProps={appProps} />
>>>>>>> Cesar
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
