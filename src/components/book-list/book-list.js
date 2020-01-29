import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError} from '../../actions/index';
import './book-list.css'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
    // recieve data
    // const { bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError } = this.props
    
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

    return (
      <div className="book-list-wrapper">
        {
          books.map((book) => <BookListItem key={book.id} book={book}/>)
        }
      </div>
    );
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
                  (BookList)); // send components with ready props