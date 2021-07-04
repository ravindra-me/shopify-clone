import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Account from './Account';
import Collections from './Collections';

import '../../style/user/main.scss';

function UserRoute(props) {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`${path}collections`} exact>
          <Collections />
        </Route>
        {props.customer.user ? (
          <Auth path={path} user={props.customer.user} />
        ) : (
          <NoAuth path={path} user={props.customer.user} />
        )}
      </Switch>
      <Footer />
    </>
  );
}

function Auth({ path, user }) {
  return (
    <>
      <Route path="*">
        {user.isAdmin ? <Redirect to="/admin" /> : <Redirect to="/" />}
      </Route>
    </>
  );
}

function NoAuth({ path, user }) {
  return (
    <Route path={`${path}login`} exact>
      <Account />
    </Route>
  );
}

const mapsStateToProps = (state) => state;

export default connect(mapsStateToProps)(UserRoute);
