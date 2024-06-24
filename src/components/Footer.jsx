import React from "react";
import "./Footer.css";
import footerImg from "../assets/footer.png";

function Footer() {
  return (
    <div className="footer-part">
      <div className="footer-top">
        <img src={footerImg} alt="footer" className="footer-img" />
        <div className="newsletter">
          <p>Be the first to know about our best deals!</p>
          <div className="newsletter-signup">
            <input
              type="email"
              placeholder="Your email address"
              className="signup-email"
            />
            <button type="submit" className="button-1">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h2>About Us</h2>
          <p>About Wayfair</p>
          <p>Wayfair Professional</p>
          <p>Gift Cards</p>
          <p>Wayfair Credit Card</p>
          <p>Wayfair Financing</p>
          <p>Careers</p>
          <p>Sell on Wayfair</p>
          <p>Investor Relations</p>
          <p>Advertise With Us</p>
          <p>Locations</p>
        </div>
        <div className="footer-column">
          <h2>Customer Service</h2>
          <p>My Orders</p>
          <p>My Account</p>
          <p>Track My Order</p>
          <p>Wayfair Accessibility Statement</p>
          <p>Return Policy</p>
          <p>Help Center</p>
          <p>Product Recalls</p>
        </div>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <button className="button2">Quick Help</button>
          <button className="button">Call Us</button>
          <h2>Customer Service</h2>
          <p>Open. Closes at 6:00 PM.</p>
          <p>Mon - Fri: 8:00 AM - 11:59 PM</p>
          <p>Sat: 8:00 AM - 8:00 PM</p>
          <p>Sun: 9:00 AM - 6:00 PM</p>
          <p>All times Eastern</p>
        </div>
      </div>
      <footer className="footer-bottom">
        <div>Terms of Use | Privacy Policy | Your Privacy Rights & Choices</div>
        <div>
          © 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA
          02116
        </div>
      </footer>
    </div>
  );
}

export default Footer;
