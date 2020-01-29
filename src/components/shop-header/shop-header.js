import React from 'react';
import './shop-header.css'
import {
  Link
} from "react-router-dom";
import './shop-header.css'

const ShopHeader= ({numItems, total}) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand" to="/">RE-store</Link>
        <Link to="/cart" className="btn cart-link">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart-num">{`${numItems} items `}</span>
          <span className="cart-total">{` ${total}$`}</span>
        </Link>
      </nav>
  );
}

export default ShopHeader;
