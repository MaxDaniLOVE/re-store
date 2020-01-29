import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import { bindActionCreators } from 'redux';
import {booksLoaded} from '../../actions/index';

export class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        {
          books.map((book) => {
            return (
            <li key={book.id}>
              <BookListItem book={book}/>
            </li>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => { // set props of component
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ //todo read more about bindActionCreators
      booksLoaded
    }, dispatch)
  }

export default withBookstoreService()
                (connect(mapStateToProps, mapDispatchToProps)
                  (BookList)); // send components with ready props

{/* <div key={id} className="card border-success mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">{title}</div>
  <div className="card-body">
    <h4 className="card-title">{author}</h4>
  </div>
</div> */}