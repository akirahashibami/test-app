import React from 'react';

import {
  FormGroup,
  FormControl,
  OutlinedInput,
  Button
} from '@material-ui/core'

class FormContainer extends React.Component {

  state = {
    user: ''
  }

  onChangeText = (e) => {
    this.setState({user: e.target.value})
  }

  handleSubmit = () => {
    this.props.createUser( this.state.user )
    this.setState({ user: '' })
  }

  render(){
    return(
      <div>
          <FormGroup>
            <FormControl>
              <OutlinedInput
                type="text"
                value={ this.state.user }
                style={{width: 300, margin: "0 auto"}}
                onChange={ this.onChangeText }
              />
            </FormControl>
          </FormGroup>
        <Button
          type="submit"
          onClick={ this.handleSubmit }
          variant="outlined"
          color="primary"
        >
          追加
        </Button>
      </div>
    )
  }
}

export default FormContainer;
