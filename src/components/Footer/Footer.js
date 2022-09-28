import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import {icons} from './constant';

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <div className="row">
          <div className="col">
            <div className='row-01'>
              <img src={logo} className="logo" />
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
              <button type="submit" class="btn">Subscribe</button>
            </form>
          </div>
        </div>

        <hr />
        <div className="row copyright">
          <p>CLEVR - © 2020 All Rights Reserved</p>
          <p className="text-copy">Made with <span className="heart">♥</span> by Peterdraw</p>
        </div>
      </footer>
    </FooterContainer>
  )
};

const FooterContainer = styled.footer`
footer{
  height: 90px;
	background: var(--clr-white);
	width: 100%;
	position: absolute;
	bottom: 0;
	color: rgb(19, 18, 18);
	padding: 30px 0;
}
.row{
	width:85%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
}
.row-02 {
	margin-top: 35px;
}
.col{
	flex-basis: 25%;
	padding: 10px;
}
.col:nth-child(2), .col:nth-child(3){
	flex-basis:15%
}
.social li {
	font-size: 0.8rem;
}
.social i {
	border-color: var(--clr-primary-9);
	display: inline-block;
	line-height: 40px;
	height: 40px;
	width: 40px;
	margin: 0 10px 10px 0;
	border-radius: 50%;
	border: 1.5px solid var(--clr-grey-10);
	text-align: center;
	cursor: pointer;
	color: var(--clr-primary-4);

}
.social i:hover{
	color: var(--clr-white);
	background-color: var(--clr-primary-10);
}

.logo{
	width: 80px;
	margin-bottom: 10px;
}
.col h3{
	width: fit-content;
	margin-bottom: 20px;
	position: relative;
}
ul li{
	list-style: none;
	margin-bottom:12px
}
ul.social{
  padding-left:0px;
}
form{
	padding-bottom: 15px;
	display: flex;
	align-items: center;
	margin-bottom:50px;
	margin-top: 25px;
}
form input {
	padding: 14px 14px;
	width: 100%;
	border-radius: var(--radius);
	border: none;
	margin-right: 10px;
	font-size: 1rem;
	background-color: var(--clr-grey-9)
}
input::placeholder{
	color: var(--clr-grey-1)
}
button {
	background: var(--clr-primary-11);
}
.btn {
	padding: 0.78rem 1rem;
	font-size: 1rem;
	border-color: transparent;
	border-radius: var(--radius);
	text-transform: capitalize;
	color: var(--clr-white);
	cursor: pointer;
}
hr{
	border:0;
	border-bottom: 0.5px solid var(--clr-grey-2);
	/* margin: 12px auto; */
}
.row.copyright{
	padding: 7px 0 15px 0;
  margin: 12px auto;
}
.heart{
	color: red;
}

  /*responsive*/
  @media(max-width: 767px) {
	footer{
		bottom:unset;
	}
  	.col {
		flex-basis: 100%;
  	}
	.col:nth-child(2), .col:nth-child(3) {
		flex-basis: 100%
	}
  }

`
export default Footer;