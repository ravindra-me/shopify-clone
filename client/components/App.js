import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProductRouter from './Products/ProductRouter';
import Header from './Header';
import AddProduct from './Products/AddProduct';
import Home from './Home';
function App() {
  return (
    <>
      <Header />
      <section className="main-section">
        <div className=" w-full flex justify-between">
          <Sidebar className="" />
          <Route path="/admin/products">
            <ProductRouter />
          </Route>
          <Route path="/admin" component={Home} exact />
        </div>
      </section>
    </>
  );
}
export default App;
