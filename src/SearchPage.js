import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

class SearchPage extends React.Component {
 

  state ={
    query:'',
    searchResultList:[],
    }
  
    //We call this method when there is a change in our input fields
    updateQuery =(query) => {
    this.setState ({
      query:query
    })
    this.searchBooks(query);
  }
 
  //this method will called when there is an input in the search feilds
   searchBooks =(query) => {
     //To check if there is a query or null value
     if(query){
       BooksAPI.search(query)
   //We should handel the error that retrived from the API 
      .then((searchResultList) =>{
         if(searchResultList.error){
           this.setState({searchResultList:[]})
         }else{
           this.setState({
           searchResultList:searchResultList
         })}
     
        })
      }else{
            this.setState({searchResultList:[]})
  }
  }


render(){

  return(
    <div className="search-books">
                        <div className="search-books-bar">
                          <Link className="close-search" to='/'>Close</Link>
                          <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" 
                              value={this.state.query}
                              onChange={(event) => this.updateQuery(event.target.value)}/>
                           </div>
                        </div>
                              <div className="search-books-results">
                                <ol className="books-grid">
                                    {this.state.searchResultList.length === 0
                                      ? <li key="no-results"></li>:
                                        this.state.searchResultList.map(booksResult => {
                                          //because some of the book that we retrived is without shelf so here we will handel this by adding to it  
                                        let shelf='none'
                                        this.props.bookList.map(book =>(
                                        book.id === booksResult.id ? shelf= book.shelf : ''

                                      ));
                                        return (<li key={booksResult.id}><BookList theBook={booksResult} shelfUpdate={this.props.shelfUpdate} shelfName={shelf}/></li>)})}
                                </ol>
                              </div>
                            </div>
  );
}

}

export default SearchPage;


    
  