import React from 'react';

import {
  FormGroup,
  TextField,
  Button,
  Grid,
} from '@material-ui/core'

import Validation from './Validation'

import './BookCreate.min.css'

class BookCreateForm extends React.Component {

  state = {
    info: {
      formTitle: '',
      formBody: '',
    },
    message: {
      formTitle: '',
      formBody: '',
    },
    loading: false
  }

  handleCreateBook = () => {
    this.props.createBook(this.state.info.formTitle, this.state.info.formBody)
    this.setState({ loading: true })
    this.setState({ loading: false })
    this.setState({info: {formTitle: '', formBody: ''}})
  }

  onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const { info, message } = this.state;

    this.setState({
      info: { ...info, [key]: value }
    })
    this.setState({
      message: {
        ...message,
        [key]: Validation.formValidate(key, value)
      }
    })
  }

  canSubmit = (): boolean => {
    const { info, message, loading } = this.state;

    const validInfo =
      Object.values(info).filter(value => {
        return value === ''
      }).length === 0;
    const validMessage =
      Object.values(message).filter(value => {
        return value !== ''
      }).length === 0;
    return validInfo && validMessage && !loading
  }

  render() {
    const { info, message } = this.state;

    console.log(this.canSubmit());

    return (
      <div className="BookCreateContainer">
        <h3>New Book</h3>
        {this.props.successCreate && (
          <p style={{color: '#16de69', fontSize: 6}}>Book was successfully created.</p>
        )}
        <FormGroup>
          <Grid item xs={6}>
            <TextField
              type="title"
              name="formTitle"
              label="Title"
              onChange={this.onChange}
              value={info.formTitle}
            />
          {this.state.message.formTitle && (
            <p style={{color: 'red', fontSize: 8}}>{message.formTitle}</p>
          )}
          </Grid>
          <Grid>
            <TextField
              type="body"
              name="formBody"
              label="Body"
              variant="outlined"
              onChange={this.onChange}
              value={info.formBody}
            />
          {this.state.message.formBody && (
            <p style={{color: 'red', fontSize: 8}}>{message.formBody}</p>
          )}
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={this.handleCreateBook}
              disabled={!this.canSubmit()}
              >
              追加
            </Button>
          </Grid>
        </FormGroup>
      </div>
    )
  }
}

export default BookCreateForm;
