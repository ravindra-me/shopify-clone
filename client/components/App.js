import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from "react-redux";
import Admin from './Admin';

import { getProfile } from "../action/user";

import { Redirect, Route, Switch } from 'react-router-dom';;
import UserRoute from './user/UserRoute';

function App (props) {
  const { push } = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (props.customer.user) {
      if (props.customer.user?.isAdmin) {
        push("/admin")
      } else {
        push("/")
      }
    } else if (token) {
      props.dispatch(getProfile(token))
    }
  }, []);

  return (
    <Switch>
      <Route path="/admin">
        {!token ? <Redirect to="/" /> : (props.customer.user && props.customer.user.isAdmin) ? <Admin /> : <p>Loading...</p>}
      </Route>
      <Route path="/">
        <UserRoute />
      </Route>
    </Switch>
  );
}

const mapsStateToProps = (state) => state;

export default connect(mapsStateToProps)(App);
