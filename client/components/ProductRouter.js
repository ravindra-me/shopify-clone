import React, { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import AllProducts from "./AllProducts";

function ProductRouter({ history }) {
  return (
    <Switch>
      <Route path="/" exact>
        <AllProducts />
      </Route>
      <Route path="*">
        <AllProducts />
      </Route>
    </Switch>
  );
}

export default withRouter(ProductRouter);
