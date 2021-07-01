// import React from 'react';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import ProductRouter from './Products/ProductRouter';
// import Header from './Header';
// import AddProduct from './Products/AddProduct';

// function Admin() {
//   const { path, url } = useRouteMatch();
//   return (
//     <>
//       <Header />
//       <section className="main-section">
//         <div className=" w-full flex justify-between">
//           <Sidebar className="" />
//           <Route path={`${path}/products`} exact>
//             <ProductRouter />
//           </Route>
//           <Route path={`${path}`} component={Home} exact />
//         </div>
//       </section>
//     </>
//   );
// }

// export default Admin;

import React, { useEffect } from 'react';
import { withRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import AllProducts from './Products/AllProducts';
import AddProduct from './Products/AddProduct';
import EditProduct from './Products/EditProduct';
import NewCollection from './Collection/NewCollection';
import CollectionMain from './Collection/CollectionMain';
import EditCollection from './Collection/EditCollection';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

import '../style/admin/main.scss';
function Admin({ history }) {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <>
      <Header />
      <section className="main-section">
        <div className=" w-full flex justify-between">
          <Sidebar className="" />
          <Switch>
            <Route path={`${path}/products`} exact>
              <AllProducts />
            </Route>
            <Route path={`${path}/products/new`} exact>
              <AddProduct />
            </Route>
            <Route path={`${path}/products/collections`} exact>
              <CollectionMain />
            </Route>
            <Route path={`${path}/products/collections/new`} exact>
              <NewCollection />
            </Route>
            <Route path={`${path}/products/collections/:slug`} exact>
              <EditCollection />
            </Route>
            <Route path={`${path}/products/:slug`} exact>
              <EditProduct />
            </Route>
            <Route path="*">
              <AllProducts />
            </Route>
          </Switch>
        </div>
      </section>
    </>
  );
}

export default withRouter(Admin);
