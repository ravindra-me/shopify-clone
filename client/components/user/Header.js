import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header class="header">
      <div class="upperPart">
        <div class="container flex justify-between align-center">
          <div>
            <a href="index.html" class="brand">
              SNOWDEVIL.
            </a>
          </div>
          <nav>
            <ul class="flex justify-between align-center">
              <li>
                <a href="#">
                  <i class="fas fa-search"></i>
                </a>
              </li>
              <a href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </ul>
          </nav>
        </div>
      </div>
      <div class="lowerPart">
        <div class="container flex justify-between align-center">
          <nav>
            <ul class="flex justify-between align-center">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">
                  SNOWBOARD <i class="fas fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  SKI <i class="fas fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  MEN <i class="fas fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  WOMEN <i class="fas fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  BRANDS <i class="fas fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">ACCESSORIES</a>
              </li>
              <li>
                <a href="#">SALE</a>
              </li>
            </ul>
          </nav>
          <div>
            <Link to="/login">Account</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
