import React from 'react';

const BookListItem = ({book}) => {
  const {title, author} = book;
  return (
    <div className="jumbotron">
      <h1 className="display-3">{title}</h1>
      <p className="lead">{author}</p>
      <hr className="my-4" />
      <p>There will be description</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="http://localhost:3000/" role="button">Learn more</a>
      </p>
    </div>
  )
}

export default BookListItem;
