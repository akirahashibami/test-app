import React from 'react';

import {
  Dialog,
  Button,
  FormGroup,
  TextField
} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';

import './BookWrapper.min.css';

class BookEdit extends React.Component {

  state = {
    changeTitle: this.props.bookData.title,
    changeBody: this.props.bookData.body
  }

  changeTitleValue = (e) => {
    this.setState({changeTitle: e.target.value})
  }

  changeBodyValue = (e) => {
    this.setState({changeBody: e.target.value})
  }

  handleUpdate = () => {
    this.props.updateBook(
      this.props.bookData.id,
      this.state.changeTitle,
      this.state.changeBody
    )
    this.props.handleCloseEdit()
  }

  render() {
    return(
      <div>
        <Dialog
          open={this.props.dialogOpen}
        >
          <div className="editDialog">
            <div className="editDialog__close">
              <CancelIcon
                onClick={this.props.handleCloseEdit}
                style={{ fontSize: 30}} />
            </div>
            <h1>Editing Book</h1>
            <FormGroup>
              <p>title</p>
              <TextField
                variant="outlined"
                value={this.state.changeTitle}
                onChange={this.changeTitleValue}
              />
              <p>body</p>
              <TextField
                variant="outlined"
                value={this.state.changeBody}
                onChange={this.changeBodyValue}
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                onClick={this.handleUpdate}
                className="editSubmit"
              >
                更新
              </Button>
            </FormGroup>
          </div>
        </Dialog>
        <Button
          onClick={this.props.handleOpenEdit}>
          Edit
        </Button>
      </div>
    )
  }
}

export default BookEdit;
