import React from 'react'

export const BookListItem=(book)=>{
const {title, author}=book.book
  
    return (
      <div >
        <span>Title:- {title} </span>
        <span> Author:-{author}</span>
      </div>
    )
}