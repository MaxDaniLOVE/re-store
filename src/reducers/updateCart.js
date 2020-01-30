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

export default updateOrder;