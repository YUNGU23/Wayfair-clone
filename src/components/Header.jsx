import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import wayFairLogo from "../assets/wayfairLogo.png";
import './Header.css';

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={wayFairLogo} alt="Wayfair" className="logo"/>
      </Link>
      <div className="search-container">
        <LuSearch className="search-icon" />
        <input type="text" placeholder="Find anything home..." className="search-bar" />
      </div>
      <nav>
        <Link to="/signin">
          <FaRegCircleUser className="user-icon" />{" "}
           Sign In
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="cart-icon" />{" "}
           Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;