import React from "react";
import Sidebar from "./Sidebar";
import { Route } from "react-router-dom";
import ProductRouter from "./ProductRouter";
import Header from "./Header";

import Home from "./Home";
import EditProduct from "./EditProduct";
function App() {
  return (
    <>
      <Header />
      <section className="main-section">
        <div className="container flex justify-between">
          <Sidebar className="" />
          <Route path="/admin/products" exact>
            <ProductRouter />
          </Route>
          <Route path="/admin/products/:slug">
            <EditProduct />
          </Route>
          <Route path="/admin" component={Home} exact />
        </div>
      </section>
    </>
  );
}
export default App;
