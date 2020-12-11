import React from 'react';

import axios from 'axios';
import update from 'react-addons-update';

import BooksIndex from './BookWrapper/BooksIndex';
import BookCreateForm from './BookCreateForm/BookCreateForm';

import './BooksMainContainer.min.css';

class BooksMainContainer extends React.Component {

  state = {
    books: [],
    successCreate: false
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/books')
      .then((results) => {
        this.setState({books: results.data})
      })
  }

  createBook = (title, body) => {
    axios
      .post('http://localhost:3001/books', { title: title, body: body})
      .then((response) => {
        const newData = update(this.state.books, { $push: [response.data]})
        this.setState({books: newData, successCreate: true})
        setTimeout(function(){
          this.setState({successCreate: false})
        }.bind(this),3000)
      })
  }

  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3001/books/${id}`)
      .then((respons) => {
        const bookIndex = this.state.books.findIndex(x => x.id === id)
        const deletedBook = update(this.state.books, {$splice: [[bookIndex, 1]]})
        this.setState({books: deletedBook})
      })
  }

  updateBook = (id, title, body) => {
    axios
      .patch(`http://localhost:3001/books/${id}`,{title: title, body: body})
      .then((response) => {
        const bookIndex = this.state.books.findIndex(x => x.id === id)
        const books = update(this.state.books, {[bookIndex]: {$set: response.data}})
        this.setState({books: books})
      })
  }

  render() {
    return(
      <div className="MainContainer">
        <BooksIndex
          bookData={this.state.books}
          deleteBook={this.deleteBook}
          updateBook={this.updateBook}
        />
        <BookCreateForm
          createBook={this.createBook}
          successCreate={this.state.successCreate}
        />
      </div>
    )
  }
}

export default BooksMainContainer;
