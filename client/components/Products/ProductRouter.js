import React, { useEffect } from 'react';
import { withRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import AllProducts from './AllProducts';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import NewCollection from '../Collection/NewCollection';
import CollectionMain from '../Collection/CollectionMain';
import EditCollection from '../Collection/EditCollection';
function ProductRouter({ history }) {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <AllProducts />
      </Route>
      <Route path={`${path}/new`} exact>
        <AddProduct />
      </Route>
      <Route path={`${path}/collections`} exact>
        <CollectionMain />
      </Route>
      <Route path={`${path}/collections/new`} exact>
        <NewCollection />
      </Route>
      <Route path={`${path}/collections/:slug`} exact>
        <EditCollection />
      </Route>
      <Route path={`${path}/:slug`} exact>
        <EditProduct />
      </Route>
      <Route path="*">
        <AllProducts />
      </Route>
    </Switch>
  );
}

export default withRouter(ProductRouter);
