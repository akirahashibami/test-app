import React from 'react';

import {
  Dialog,
  Button,
  FormGroup,
  TextField
} from '@material-ui/core';

import './BookWrapper.min.css';

class BookEdit extends React.Component {

  state = {
    changeTitle: this.props.bookData.title,
    changeBody: this.props.bookData.body
  }

  render() {
    return(
      <div>
        <Dialog
          open={this.props.dialogOpen}
          onClick={this.props.handleCloseEdit}
        >
          <FormGroup>
            <TextField
              variant="outlined"
              value={this.state.changeTitle}
            />
            <TextField
              variant="outlined"
              value={this.state.changeBody}
            />
          </FormGroup>
        </Dialog>
        <Button onClick={this.props.handleOpenEdit}>
          Edit
        </Button>
      </div>
    )
  }
}

export default BookEdit;
