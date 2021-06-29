import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function UserRoute() {
  const { path, url } = useRouteMatch();
  console.log(`${path}/login`);
  return (
    <>
      <Header />
      <Switch>
        <Route path={`${path}login`} exact>
          <Login />
        </Route>
        <Route path={`${path}signup`} exact>
          <Signup />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default UserRoute;
