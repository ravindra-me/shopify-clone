import React from 'react';
function Footer() {
  return (
    <footer class="footer py-8">
      <div class="upperPart">
        <div class="container flex justify-between align-start">
          <div class="contact flex-20">
            <h4>CONTACT</h4>
            <ul>
              <li className="hover:text-black">
                <address>215015, Virginia Street, New York, NY 60154</address>
              </li>
              <li className="hover:text-black">
                <a href="tel:+1-555-555-555">+1-555-555-555</a>
              </li>
              <li className="hover:text-black">
                <i class="far fa-envelope"></i>
                <a
                  href="mailto:ravindrarajpoot9628172@gmail.com"
                  className="ml-4"
                >
                  name@company.com
                </a>
              </li>
            </ul>
          </div>
          <div class="support flex-20">
            <h4>SUPPORT</h4>
            <ul>
              <li className="hover:text-black">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Return Policy</a>
              </li>
            </ul>
          </div>
          <div class="about flex-20">
            <h4>ABOUT</h4>
            <ul>
              <li className="hover:text-black">
                <a href="#">About</a>
              </li>
              <li className="hover:text-black">
                <a href="#">News</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Contact</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Theme Features</a>
              </li>
            </ul>
          </div>
          <div class="about flex-20">
            <h4>ORDER</h4>
            <ul>
              <li className="hover:text-black">
                <a href="#">My Account</a>
              </li>
              <li className="hover:text-black">
                <a href="#">View Cart</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Wishlist</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Chekout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <div className="container flex justify-between items-center">
          <p>© 2021 - E-commerce by Shopify</p>
          <ul className="flex">
            <li className="ml-8 ">
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="ml-8 ">
              <a href="">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="ml-8 ">
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
