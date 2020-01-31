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
        <div className="book-info">
          <span>Title: {title}</span>
          <span>Subtitle: {subtitle}</span>
          <span>Authors: {authors}</span>
          <span>Publisher: {publisher}</span>
          <span>Language: {language}</span>
          <span>Pages: {pages}</span>
          <span>Year: {year}</span>
          <span>Rating: {rating}</span>
          <span>Description: {desc}</span>
          <span>Price: {price}</span>
          <img className="book-image" src={image} alt="img"/>
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
