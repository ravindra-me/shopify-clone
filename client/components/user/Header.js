import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
function Header(props) {
  const [state, setState] = useState({
    isNav: false,
    sideNav: false,
  });

  const { isNav, sideNav } = state;
  console.log(props.user);
  // useEffect(() => {
  //   console.log(props.customer.user);
  // }, []);

  return (
    <header class="header   fixed w-full z-50 top-0 flex items-center  shadow">
      <div className="w-full flex justify-between items-center px-8">
        <nav className="">
          <ul className="flex items-center">
            <li className="mr-4">
              <Link to="/">HOME</Link>
            </li>
            <li className="mr-4">
              <a href="">SHOP</a>
            </li>
            <li className="mr-4">
              <a href="">PAGES</a>
            </li>

            <li
              className="mr-4 relative sub-nav "
              onClick={() => setState({ ...state, isNav: !isNav })}
            >
              SALE
              {isNav === true && (
                <div className=" absolute bg-white width-500 top-12 flex justify-between p-8  shadow-xl ">
                  <ul>
                    <li className="font-bold mb-4">CLOTHS</li>
                    <li>Jeans</li>
                    <li>Jeans</li>
                    <li>Jeans</li>
                    <li>Jeans</li>
                    <li>Jeans</li>
                  </ul>
                  <ul>
                    <li className="font-bold mb-4">SHOOSE</li>
                    <li>Heels</li>
                    <li>Heels</li>
                    <li>Heels</li>
                    <li>Heels</li>
                  </ul>
                  <ul>
                    <li className="font-bold mb-4">ACCESSORIES</li>
                    <li>laptop</li>
                    <li>laptop</li>
                    <li>laptop</li>
                    <li>laptop</li>
                  </ul>
                </div>
              )}
            </li>
            {/* {props.customer.user.isAdmin ? (
              <li>
                <Link to="/admin">Admin Dashbord</Link>
              </li>
            ) : (
              ''
            )} */}
          </ul>
        </nav>
        <div className="">
          <a href="" className="text-2xl font-bold">
            <i class="fab fa-shopify text-green-500 text-2xl"></i> SHOPIFY
          </a>
        </div>
        <div>
          <ul className="flex  items-center">
            {props.customer.user ? (
              <li className="ml-4">
                <Link to="/profile">
                  Hello, {props.customer.user.firstName.toUpperCase()}{' '}
                </Link>
              </li>
            ) : (
              <li className="ml-4">
                <Link to="/login"> login </Link>
              </li>
            )}
            <li className="ml-4">
              <i class="fas fa-search"></i>
            </li>
            <li className="ml-4">
              <i
                class="fas fa-shopping-bag"
                onClick={() => setState({ ...state, sideNav: true })}
              ></i>
            </li>
          </ul>
        </div>
      </div>
      {sideNav && <Cart state={state} setState={setState} />}
    </header>
  );
}

const mapsStateToProps = (state) => state;

export default connect(mapsStateToProps)(Header);
