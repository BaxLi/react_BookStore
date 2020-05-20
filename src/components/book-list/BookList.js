import React, { Component } from 'react'
import { BookListItem } from './BookListItem'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

import {withBookStoreService} from '../hoc'
import {booksLoaded} from '../../actions'


class BookList extends Component {

  componentDidMount(){
    // receive data
      const {bookStoreService}=this.props
      const data = bookStoreService.getBooks()

      console.log("BookList -> componentDidMount -> data", data)
    // dispatch - to save data in store

      this.props.booksLoaded(data)
      console.log("BookList -> componentDidMount -> props", this.props)
  }

  render() {
    const { books } = this.props
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({books}) =>{
  return {books}
}

const mapDispatchToProps = {
  booksLoaded
  // return  bindActionCreators({booksLoaded}, dispatch)
}
export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
  )
