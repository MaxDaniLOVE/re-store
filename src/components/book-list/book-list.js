import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError} from '../../actions/index';
import './book-list.css'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books}) => { // only render
  return (
    <div className="book-list-wrapper">
      {
        books.map((book) => <BookListItem key={book.id} book={book}/>)
      }
    </div>
  );
}

export class BookListContainer extends Component { // only logic
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, isLoading, error } = this.props;
    if (isLoading) {
      return (
        <div className="book-list-wrapper">
          <Spinner />
        </div>
      )
    }
    if (error) {
      return (
        <div className="book-list-wrapper">
          <ErrorIndicator />
        </div>
      )
    }

    return <BookList books={books}/>;
  }
}



const mapStateToProps = (state) => { // set props of component
  return {
    books: state.books,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps // ownProps gets props from rendering element
  return { //todo read more about bindActionCreators
     fetchBooks: () => {
        dispatch(booksRequested()); // will show spinner every time when visit home page
        bookstoreService.getBooks()
        .then((data) => { 
          dispatch(booksLoaded(data)) // dispatch action to store
        })
        .catch((err) => {
          dispatch(booksError(err));
        })
        }
      }
  }

export default withBookstoreService()
                (connect(mapStateToProps, mapDispatchToProps)
                  (BookListContainer)); // send components with ready props
