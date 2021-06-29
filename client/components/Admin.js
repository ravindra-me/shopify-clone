import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProductRouter from './Products/ProductRouter';
import Header from './Header';
import AddProduct from './Products/AddProduct';
import Home from './Home';

import '../style/admin/main.scss';

function Admin() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Header />
      <section className="main-section">
        <div className=" w-full flex justify-between">
          <Sidebar className="" />
          <Route path={`${path}/products`}>
            <ProductRouter />
          </Route>
          <Route path={`${path}`} component={Home} exact />
        </div>
      </section>
    </>
  );
}

export default Admin;
