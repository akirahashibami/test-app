import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  TableCell,
  TableRow,
  Paper,
  Button,
  Dialog
} from '@material-ui/core';

import BookShow from './BookShow';
import BookEdit from './BookEdit';

class BookContainer extends React.Component {

  state = {
    openShow: false,
    openEdit: false
  }

  handleDelete = () => {
    this.props.deleteBook(this.props.data.id)
  }

  handleOpenShow = () => {
    this.setState({openShow: true})
  }

  handleCloseShow = () => {
    this.setState({openShow: false})
  }

  handleOpenEdit = () => {
    this.setState({openEdit: true})
  }

  handleCloseEdit = () => {
    this.setState({openEdit: false})
  }

  render() {
    return(
      <TableRow>
        <TableCell>{this.props.data.title}</TableCell>
        <TableCell>{this.props.data.body}</TableCell>
        <TableCell>
          <BookShow
            handleOpenShow={this.handleOpenShow}
            handleCloseShow={this.handleCloseShow}
            dialogOpen={this.state.openShow}
            bookData={this.props.data}
          />
        </TableCell>
        <TableCell>
          <BookEdit
            handleOpenEdit={this.handleOpenEdit}
            handleCloseEdit={this.handleCloseEdit}
            dialogOpen={this.state.openEdit}
            bookData={this.props.data}
          />
        </TableCell>
        <TableCell onClick={this.handleDelete}>
          <Button>Destroy</Button>
        </TableCell>
      </TableRow>
    )
  }
}

export default BookContainer;
