const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  }
}
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}
const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  }
}

const bookAddedToCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id,
  }
}
export {booksLoaded, booksRequested, booksError, bookAddedToCart}