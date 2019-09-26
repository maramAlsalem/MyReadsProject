import React from 'react'

class BookList extends React.Component {

render(){
    //To check if the thumbnail is exsist in the object because there is an error we should handel that appear when the book does not have an images  
    const thumbnail = this.props.theBook.imageLinks ? this.props.theBook.imageLinks.thumbnail : ''

    return (
    <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{width:128,height:193,backgroundImage:  'url(' + thumbnail + ')'}}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.props.shelfName} onChange={(event)=> this.props.shelfUpdate(this.props.theBook,event.target.value)}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.theBook.title}</div>
        <div className="book-authors">{this.props.theBook.authors}</div>
    </div>

    );
}

}

export default BookList;