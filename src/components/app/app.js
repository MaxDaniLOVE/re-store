import React from 'react';
import Spinner from '../spinner';
import withBookstoreService from '../hoc/with-bookstore-service';

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks());
  const books = bookstoreService.getBooks();
  const spans = books.map((book) => {
    return (
      <div key={book.id} className="card border-success mb-3">
        <div className="card-header">{book.author}</div>
        <div className="card-body">
          <h4 className="card-title">{book.title}</h4>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Spinner />
      {spans}
    </div>
  );
}

export default withBookstoreService()(App);
