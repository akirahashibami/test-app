import React from 'react';

import {
  Dialog,
  Button
} from '@material-ui/core';

import './BookWrapper.min.css';

const BookShow = props => {

  return(
    <div>
      <Dialog
        open={props.dialogOpen}
        onClick={props.handleCloseShow}
      >
        <div className="bookDialog">
          <p><strong>Title: </strong>{props.bookData.title}</p>
          <p><strong>Body: </strong>{props.bookData.body}</p>
          <Button className="editButton">Edit</Button>
        </div>
      </Dialog>
      <Button onClick={props.handleOpenShow}>
        Show
      </Button>
    </div>
  )

}

export default BookShow;
