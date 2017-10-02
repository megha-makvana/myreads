import React ,{ Component }from 'react'
import Book from './Book.js'
import './App.css'

class BookShelf extends Component {
  render() {
  const showingBooks = this.props.books
    // console.log('props',this.props.books)
    // console.log('props',showingBooks)
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { showingBooks.map( (book) =>
              // <li key={book.id}>
                <Book book={book} key={book.id} oonUpdateShelf={this.props.onnUpdateShelf} />
              // </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
