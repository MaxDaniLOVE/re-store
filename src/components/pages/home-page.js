import React from 'react';
import BookListContainer from '../book-list';
import './home-page.css';

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <BookListContainer />
    </div>
  )
}

export default HomePage