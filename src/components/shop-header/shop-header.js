import React from 'react';
import './shop-header.css'
import {
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import './shop-header.css'

const countItems = (cartItems) => {
  if (!cartItems.length) {
    return 0;
  }
  return cartItems.reduce((reducer, {count}) => reducer + count, 0);
}

const ShopHeader= ({items, total}) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand" to="/">RE-store</Link>
        <Link to="/cart" className="btn cart-link">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart-num">{`${countItems(items)} items `}</span>
          <span className="cart-total">{` ${total}$`}</span>
        </Link>
      </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal,
  }
}

export default connect(mapStateToProps)(ShopHeader);
