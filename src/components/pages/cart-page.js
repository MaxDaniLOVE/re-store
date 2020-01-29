import React from 'react';
import BookListItem from '../book-list-item';

const CartPage = () => {
  const book = {id: 1, title: 'How to Stop Worrying and Start Living (1948)', author: 'Dale Carnegie'}
  return (
    <BookListItem book={book}/>
  )
}

export default CartPage