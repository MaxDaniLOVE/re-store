const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [ ],
  orderTotal: 1120
}

const reducer = (state = initialState, action) => {
  console.log(action.type);
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
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ],
      }  
    default:
      return state;
  }
}

export default reducer;