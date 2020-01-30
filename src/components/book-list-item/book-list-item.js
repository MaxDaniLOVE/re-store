import React from 'react';
import './book-list-item.css'

const BookListItem = ({book, onAddedToCart}) => {
  const {title, author, image, price} = book;
  return (
    <div className="jumbotron book-item">
      <img className="book-item-img" src={image} alt="img"/>
      <div className="book-item-info-wrapper">
        <h1 className="display-3 book-title">{title}</h1>
        <p className="lead">{author}</p>
        <hr className="my-4" />
        <p>There will be description</p>
        <p className="book-item-price">{`$${price}`}</p>
        <p className="lead">
          <button
          className="btn btn-success"
          onClick={onAddedToCart}
          >Add to cart</button>
        </p>
      </div>
    </div>
  )
}

export default BookListItem;
