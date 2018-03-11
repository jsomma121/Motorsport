import React, { Component } from 'react';
import { Button, CardActions, SelectionControl, SelectionControlGroup, Snackbar, TextField } from 'react-md';
import { dataBase } from '../../server/base';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: { value: '' },
      password: { value: '' },
      isLoading: false,
      

    }
  }

  handleSubmit = (event) => {
    let { email, password } = this.state;
    dataBase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(authUser => this.setState({user: authUser}))
      .catch(error => console.log("ERROR DISPLAYED HERE------------" + error))

  }

  handleChange = (name, value) => {
    this.setState({
      [name]: { value }
    })
    console.log(this.state);
  }

  render() {
    return (

      <form className="md-grid text-fields__application" onSubmit={this.handleSubmit} label="LoginPage">
        <TextField
          id="email"
          label="Email"
          type="text"
          value={this.state.email.value}
          onChange={this.handleChange.bind(this, "email")}
          className="md-cell md-cell--12"
          required
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          value={this.state.password.value}
          onChange={this.handleChange.bind(this, "password")}
          className="md-cell md-cell--12"
          required
        />
        <Button raised primary type="submit" className="md-cell--right">Submit</Button>
      </form>


    )
  }
}

export default Login;