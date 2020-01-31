import updateOrder from './updateCart';

const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 1120,
  infoId: null,
  bookInfo: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: action.payload,
        isLoading: true,
        error: null
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1)
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const deletedBookId = action.payload;
      const updatedBooks = state.cartItems.filter((item) => item.id !== deletedBookId)
      return {
        ...state,
        cartItems: updatedBooks,
      }
    case 'WRITE_BOOK_ID':
      return {
        ...state,
        infoId: action.payload
      }
    case 'FETCH_BOOK_INFO':
      return {
        ...state,
        bookInfo: action.payload
      }
    default:
      return state;
  }
}

export default reducer;