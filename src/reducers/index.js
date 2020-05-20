const initialState = {
  books: [
    // {id:1, title:'book-1', author:'author-1'},
    // {id:2, title:'book-2', author:'author-2'},
    // {id:3, title:'book-3', author:'author-3'}
  ]
}

export const reducer = (state = initialState, action) => {
console.log("reducer -> reducer- action", action)
  
  switch (action.type) {
    case 'BOOKS_LOADED':
      console.log("reducer -> payload", action.payload)
      return { books: action.payload }
    default:
      return state
  }
}

