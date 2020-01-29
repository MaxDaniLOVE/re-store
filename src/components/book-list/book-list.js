import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import { bindActionCreators } from 'redux';
import {booksLoaded, booksRequested} from '../../actions/index';
import './book-list.css'
import Spinner from '../spinner';

export class BookList extends Component {
  componentDidMount() {
    // recieve data
    const { bookstoreService, booksLoaded, booksRequested } = this.props
    booksRequested(); // will show spinner every time when visit home page
    bookstoreService.getBooks()
      .then((data) => { // dispatch action to store
        booksLoaded(data)
      })
    
    
  }

  render() {
    const { books, isLoading } = this.props;
    if (isLoading) {
      return (
        <div className="book-list-wrapper">
          <Spinner />
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
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ //todo read more about bindActionCreators
      booksLoaded, booksRequested
    }, dispatch)
  }

export default withBookstoreService()
                (connect(mapStateToProps, mapDispatchToProps)
                  (BookList)); // send components with ready props

/* <div key={id} className="card border-success mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">{title}</div>
  <div className="card-body">
    <h4 className="card-title">{author}</h4>
  </div>
</div> */