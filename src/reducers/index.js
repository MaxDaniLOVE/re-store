const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [ ],
  orderTotal: 1120
}
// ! use for adding not existing items
const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }
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
// ! use for adding count and price to state
const updateCartItem = (book, item, quantity) => {
  let newItem;
  if (item) {
    newItem = {
      ...item,
      count: item.count + quantity,
      total: item.total + quantity * book.price
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

const updateOrder = (state, bookId, quantity) => {
  const {books, cartItems} = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((addedBook) => addedBook.id === bookId)
  const item = cartItems[itemIndex]
  let newItem = updateCartItem(book, item, quantity)
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  }
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
    default:
      return state;
  }
}

export default reducer;