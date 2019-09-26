import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'


class App extends React.Component {

  state ={
    bookList :[],
  }

  //To retrive All the books in the beggining 
  componentDidMount(){
    this.getAllBooks();
   }

   componentDidUpdate(){
    this.getAllBooks();

   }

   //we put getAllBooks as function because we reuse it in two method
    getAllBooks (){
      BooksAPI.getAll()
      .then((bookList)=>{
        this.setState(()=>({
          bookList:bookList
        }))
      })  
    }

  changeShelf = (book, changeToShelf) => {
    BooksAPI.update(book, changeToShelf);
    //To refresh the page
    this.getAllBooks ();
    
  }
  render() {
    return (
        <div className='app'>
          <Route exact path='/' render={() => (
            <Library bookList={this.state.bookList} shelfUpdate={this.changeShelf} />
          )} />
          <Route path='/SearchPage' render={() => (
            <SearchPage bookList={this.state.bookList} shelfUpdate={this.changeShelf} />
          )} />
        </div>
    )
  }
}


export default App;
 