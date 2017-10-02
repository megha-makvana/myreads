import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import BookSearch from './BookSearch.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books : [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }
  showSearchPage: false

  componentDidMount(){
    BooksAPI.getAll().then( (books) => {
      this.setState({books})
    })
  }

  // updateShelf= (event) => {
  //   console.log(event)
  //   this.setState()
  // }
  render() {
    // console.log('state',this.state.books)
    return (
      <div className="app">

        <Route path='/' exact render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )} />

      <Route path='/search' exact render={() => (
        <BookSearch />
      )} />

    </div>


    )
  }
}

export default BooksApp
