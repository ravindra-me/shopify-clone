import React from 'react';
import Admin from './Admin';

import { Route, Switch } from 'react-router-dom';

import User from './User';
import UserRoute from './user/UserRoute';
function App() {
  return (
    <Switch>
      <Route path="/">
        <UserRoute />
      </Route>
      <Route path="/admin" exact>
        <Admin />
      </Route>
    </Switch>
  );
}

export default App;
