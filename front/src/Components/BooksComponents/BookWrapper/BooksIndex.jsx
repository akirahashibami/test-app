import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import BookContainer from './BookContainer';

const useStyles = makeStyles({
  table: {
    maxWidth: 750
  }
})

const BooksIndex = props => {

  const classes = useStyles()

  return(
    <div>
      <Link to="/">topへ戻る</Link>
      <h3>Books</h3>
      <TableContainer component={Paper} style={{boxShadow: "none"}}>
        <Table className={classes.table} >
          <TableHead>
            <TableRow>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Body</strong></TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            { props.bookData.map((data) => {
              return(
                <BookContainer
                  data={ data }
                  key={ data.id }
                  deleteBook={props.deleteBook}
                  createBook={props.createBook}
                  updateBook={props.updateBook}
                />
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BooksIndex;
