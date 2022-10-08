import React from 'react';
import BookLogo from "../common/BookLogo";
import { icons } from './constant';
import "./Footer.css";

const Footer = () => {
  return (
      <footer id="footer">
        <div className="row">
          <div className="col">
            <div className='row-01'>
              <BookLogo />
              <p>Clevr is a online bookstore website who sells all genres of books from around the world. Find your book here now</p>
            </div>
            <div className='row-02'>
              <h3>Follow Us</h3>
              <ul className="social">
                <li className="icon">
                  {icons.map((item) => {
                    const {id, icon} = item;
                    return(
                      <i key={id}>{icon}</i>
                    );
                  })}
                </li>
              </ul>
            </div>  
          </div>

          <div className="col">
            <h3>Quick Links</h3>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Products</li>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
            
          <div className="col">
            <h3>Customer Area</h3>
            <ul>
              <li>My Account</li>
              <li>Order</li>
              <li>Tracking List</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col">
            <h3>Don’t miss the newest books</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            <form >
              <input type="email" placeholder="Type your email here" required />
              <button type="submit" className="btn-sub">Subscribe</button>
            </form>
          </div>
        </div>

        <hr />
        <div className="row copyright">
          <p>CLEVR - © 2020 All Rights Reserved</p>
          <p className="text-copy">Made with <span className="heart">♥</span> by Peterdraw</p>
        </div>
      </footer>
  )
};

export default Footer;