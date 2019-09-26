
import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'
import './App.css'


class Library extends Component {


  render (){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
          </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {this.props.bookList.filter(book => book.shelf === 'currentlyReading').map(
                          book => ( <li key= {book.id}><BookList theBook={book} shelfUpdate={this.props.shelfUpdate} shelfName='currentlyReading'/></li>))}
                       
                      </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.bookList.filter(book => book.shelf === 'wantToRead').map(
                          book => ( <li key= {book.id}><BookList theBook={book} shelfUpdate={this.props.shelfUpdate} shelfName='wantToRead' /></li>))}
                       
                      </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {this.props.bookList.filter(book => book.shelf === 'read').map(
                          book => ( <li key= {book.id}><BookList theBook={book} shelfUpdate={this.props.shelfUpdate} shelfName='read'/></li>))}
                       
                      </ol>
                    </div>
                </div>
          </div>
      </div>
      <Link className="open-search" to="/SearchPage">open Search</Link>

      </div>
  );

  }
}


export default Library;