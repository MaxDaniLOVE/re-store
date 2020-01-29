import React from 'react';
import BookList from '../book-list';
import './home-page.css';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <BookList />
      <ShoppingCartTable />
    </div>
    
  )
}

export default HomePage