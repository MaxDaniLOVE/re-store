const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      title: 'test',
      count: 1,
      total: 100
    },
    {
      id: 2,
      title: 'test1',
      count: 2,
      total: 1020
    }
  ],
  orderTotal: 1120
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
    default:
      return state;
  }
}

export default reducer;