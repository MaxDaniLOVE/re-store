import React, { Component } from 'react';
import './book-info.css';
import { connect } from 'react-redux';
import BookstoreService from '../../services/bookstore-service';
import {
  bookInfo,
} from '../../actions/index';
import Spinner from '../spinner';

export class BookInfo extends Component {
  state = {
    bookInfo: {},
    isLoading: true,
  }
  componentDidMount() {
    this.getBook()
  }
  getBook() {
    const { infoId, fetchBookInfo } = this.props;
    if (!infoId) {
      return (
        <div className="home-page-wrapper">
          <h1 className="book-info">Return to previous page and select book</h1>
        </div>
      )
    }
    const service = new BookstoreService();
    const result = service.getBookInfo(infoId)
      .then((bookInfo) => {
        this.setState({
          bookInfo,
          isLoading: false,
        });
      })
      
    return fetchBookInfo(result);
  }
  render() {
    const { infoId } = this.props;
    const { bookInfo, isLoading } = this.state;
    const {
      title,
      subtitle,
      authors,
      publisher,
      language,
      pages,
      year,
      rating,
      desc,
      price,
      image
    } = bookInfo
    if (!infoId) {
      return (
        <div className="home-page-wrapper">
          <h1 className="book-info">Return to previous page and select book</h1>
        </div>
      )
    }
    if (isLoading) {
      return (
        <div className="home-page-wrapper">
          <div className="book-info">
            <Spinner />
          </div>
        </div>
      )
    }
    return (
      <div className="home-page-wrapper">
        <div className="book-info jumbotron book-info-block">
          <div className="book-image-info" style={{backgroundImage: `url(${image})`}} alt="img"/>
          <div className="book-info-block_titles">
            <h1 className="book-info-title">{title}</h1>
            <h2 className="book-info-subtitle">{subtitle}</h2>
            <hr size="30" />
            <h5>Authors: {authors}</h5>
            <h5>Publisher: {publisher}</h5>
            <h5>Language: {language}</h5>
            <h5>Pages: {pages}</h5>
            <h5>Year: {year}</h5>
            <div className="rating">
              <h5>Rating: {rating}*</h5>
            </div>
            <h5>Description: {desc}</h5>
            <h5>Price: {price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({infoId, bookInfo}) => {
  return {
    infoId,
    bookInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookInfo: (info) => {
      dispatch(bookInfo(info))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);
