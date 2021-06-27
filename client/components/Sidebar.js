import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

function Sidebar(props) {
  const [state, setState] = useState({ isTrue: false });
  const { location } = useHistory();
  useEffect(() => {
    if (location.pathname === '/admin/products') {
      setState({ isTrue: true });
    }
  }, []);
  return (
    <section className=" sidebar-height  border-r-2 border-solid border-gray-500 sidebar  flex-15  bg-gray-100 ">
      <div className="  pl-4 ">
        <ul>
          <li className="py-2">
            <NavLink
              to="/admin"
              className="block pb-2 text-xl"
              activeClassName="active-sidebar text-green-500"
              exact
            >
              <i class="fas fa-home mr-2"></i> Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/order"
              className="block pb-2 text-xl"
              activeClassName="active-sidebar text-green-500"
            >
              <i class="fas fa-cart-arrow-down mr-2"></i> Orders
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/products"
              onClick={() => {
                setState({ isTrue: true });
              }}
              className="block pb-2 text-xl"
              exact
            >
              <i class="fas fa-tag mr-4"></i> Products
            </NavLink>
            {state.isTrue === true ? (
              <ul className="ml-2">
                <li className="py-2">
                  <NavLink
                    to="/admin/products"
                    activeClassName="active-sidebar text-green-500"
                    className="block pb-2 text-xl"
                  >
                    All Products
                  </NavLink>
                </li>
              </ul>
            ) : (
              ''
            )}
          </li>
          <li className="py-2">
            <NavLink to="/admin" className="text-xl">
              <i class="fas fa-user-alt mr-2"></i>Customers
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/admin" className="text-xl">
              {' '}
              <i class="fas fa-signal mr-2"></i>Analytics
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
