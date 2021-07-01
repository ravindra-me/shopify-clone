import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Account from './Account';
import Collections from './Collections';
function UserRoute() {
  const { path, url } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`${path}login`} exact>
          <Account />
        </Route>
        <Route path={`${path}collections`} exact>
          <Collections />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default UserRoute;
