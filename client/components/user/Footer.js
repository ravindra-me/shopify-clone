import React from 'react';
function Footer() {
  return (
    <footer class="footer">
      <div class="upperPart">
        <div class="container flex justify-between align-start">
          <div class="contact flex-20">
            <h4>CONTACT</h4>
            <ul>
              <li>
                <address>215015, Virginia Street, New York, NY 60154</address>
              </li>
              <li>
                <a href="tel:+1-555-555-555">+1-555-555-555</a>
              </li>
              <li>
                <a href="mailto:name@company.com">name@company.com</a>
              </li>
            </ul>
          </div>
          <div class="support flex-20">
            <h4>SUPPORT</h4>
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
            </ul>
          </div>
          <div class="about flex-20">
            <h4>ABOUT</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Theme Features</a>
              </li>
            </ul>
          </div>
          <div class="beInTheKnow flex-20">
            <h4>BE IN THE KNOW</h4>
            <p>Promotions,new products and sales. Directly to your inbox.</p>
            <div class="font-0">
              <input type="email" placeholder="Your email" />
              <button>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lowerPart flex justify-between align-center">
        <div class="container flex justify-between align-center">
          <small> &copy; 2021, Snowdevil. Powered by Shopify</small>
          <div>
            <ul class="flex justify-between align-center">
              <li>
                <i class="fab fa-cc-visa"></i>
              </li>
              <li>
                <i class="fab fa-cc-mastercard"></i>
              </li>
              <li>
                <i class="fab fa-cc-amex"></i>
              </li>
              <li>
                <i class="fab fa-cc-paypal"></i>
              </li>
              <li>
                <i class="fab fa-cc-diners-club"></i>
              </li>
              <li>
                <i class="fab fa-cc-discover"></i>
              </li>
              <li>
                <i class="fab fa-cc-apple-pay"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
