const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [ ],
  orderTotal: 1120
}

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  } else {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ]
  }
}

const updateCartItem = (book, item) => {
  let newItem;
  if (item) {
    newItem = {
      ...item,
      count: item.count + 1,
      total: item.total + book.price
    }
  } else {
    newItem = {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    }
  }
  return newItem;
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
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex((addedBook) => addedBook.id === bookId)
      const item = state.cartItems[itemIndex]
      let newItem = updateCartItem(book, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      }  
    default:
      return state;
  }
}

export default reducer;