import React , { Component } from 'react'
import BookShelf from './BookShelf.js'
import './App.css'
import { Link } from 'react-router-dom'

class ListBooks extends Component {


  render() {
    // console.log('props',this.props.books)
      console.log('props',this.props.onNavigate)
    return (

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
             <BookShelf  books={this.props.books.filter( (book)=> book.shelf==='currentlyReading')} title={'Currently Reading ' } onnUpdateShelf={this.props.onUpdateShelf} />
             <BookShelf  books={this.props.books.filter( (book)=> book.shelf==='wantToRead')} title={'Want To Read'} onnUpdateShelf={this.props.onUpdateShelf} />
             <BookShelf  books={this.props.books.filter( (book)=> book.shelf==='read')} title={'Read'} onUpdateShelf={this.props.onUpdateShelf} />
          </div>
          <Link to="/search">
            <div className="open-search">
              <a>Search Book</a>
            </div>
          </Link>
        </div>

    )
  }
}

export default ListBooks
