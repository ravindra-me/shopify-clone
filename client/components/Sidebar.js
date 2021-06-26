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
              className="block pb-2"
              activeClassName="active-sidebar text-green-500"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/order"
              className="block pb-2"
              activeClassName="active-sidebar text-green-500"
            >
              Orders
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/products"
              onClick={() => {
                setState({ isTrue: true });
              }}
              className="block pb-2"
              exact
            >
              Products
            </NavLink>
            {state.isTrue === true ? (
              <ul className="ml-4">
                <li className="py-2">
                  <NavLink
                    to="/admin/products"
                    activeClassName="active-sidebar text-green-500"
                    className="block pb-2"
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
            <NavLink to="/admin">Customers</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/admin">Analytics</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
