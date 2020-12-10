import React from 'react';

import axios from 'axios';

import update from 'react-addons-update';

import UserContainer from './UserContainer';
import FormContainer from './FormContainer';

class MainContainer extends React.Component {

  state = {
    users: []
  }

  // componentDidMount() は、コンポーネントがマウントされた（ツリーに挿入された）直後に呼び出されます
  // DOM ノードを必要とする初期化はここで行われるべきです
  componentDidMount() {
    axios
      .get('http://localhost:3001/users')
      .then((results) => {
        this.setState({users: results.data})
      })
  }

  createUser = (name) => {
    axios
      .post('http://localhost:3001/users', { name: name })
      .then((response) => {
        console.log(response)
        const newData = update(this.state.users, { $push: [response.data] })
        this.setState({ users: newData })
      })
  }

  render(){
    return(
      <div className="App">
        <FormContainer createUser={ this.createUser } />
        <UserContainer userData={ this.state.users }/>
      </div>
    )
  }
}

export default MainContainer;
