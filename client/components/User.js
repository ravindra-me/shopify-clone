import React from 'react';
import Header from './user/Header';
import Footer from './user/Footer';

import '../style/user/main.scss';
import { Route, useRouteMatch } from 'react-router-dom';

function User() {
  const { path, url } = useRouteMatch();
  console.log('hello');
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`${path}/login`} exact>
          <Login />
        </Route>
        <Route path={`${path}/signup`} exact>
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default User;
