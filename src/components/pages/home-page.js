import React from 'react';
import BookListContainer from '../book-list';
import './home-page.css';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <BookListContainer />
      <ShoppingCartTable />
    </div>
    
  )
}

export default HomePage