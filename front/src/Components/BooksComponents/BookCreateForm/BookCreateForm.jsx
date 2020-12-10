import React from 'react';

import {
  FormGroup,
  TextField,
  Button,
  Grid,
} from '@material-ui/core'

class BookCreateForm extends React.Component {

  state = {
    formTitle: '',
    formBody: ''
  }

  handleCreateBook = () => {
    this.props.createBook(this.state.formTitle, this.state.formBody)
    this.setState({formTitle: '', formBody: ''})
  }

  onChangeTitle = (e) => {
    this.setState({formTitle: e.target.value})
  }

  onChangeBody = (e) => {
    this.setState({formBody: e.target.value})
  }

  render() {
    return (
      <div>
        <h3>New Book</h3>
        <FormGroup>
          <Grid item xs={6}>
            <TextField
              label="Title"
              onChange={this.onChangeTitle}
              value={this.state.formTitle}
            />
          </Grid>
          <Grid>
            <TextField
              label="Body"
              variant="outlined"
              onChange={this.onChangeBody}
              value={this.state.formBody}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={this.handleCreateBook}>
              追加
            </Button>
          </Grid>
        </FormGroup>
      </div>
    )
  }
}

export default BookCreateForm;
