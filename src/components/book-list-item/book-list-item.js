import React from 'react';
import './book-list-item.css'

const BookListItem = ({book, onAddedToCart}) => {
  const {title, author, image, price} = book;
  const style = {
    backgroundImage: `url(${image})`
  }
  return (
    <div className="jumbotron book-item">
      <div className="book-item-img" style={style} height="100%" alt="img"/>
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
          <button
          className="btn btn-info"
          onClick={() => alert('not implemented yet')}
          >Show more info</button>
        </p>
      </div>
    </div>
  )
}

export default BookListItem;
