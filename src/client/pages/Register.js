import React, { Component } from 'react';
import { Button, CardActions, SelectionControl, SelectionControlGroup, Snackbar, TextField } from 'react-md';
import { firebase } from '../../server/base';

class Register extends Component {
    constructor(props) {
		super(props);
		this.state = {
			email: { value: '' },
			password: { value: '' },
			success: false
		}
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit');
        console.log(this.state.email);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        
    }

    handleChange = (name, value) => {
		this.setState({ [name]: { value } })
	}
 
    render() {
      return (
        <form className="md-grid text-fields__application" onSubmit={this.handleSubmit}>
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
                type="text"
                value={this.state.password.value}
                onChange={this.handleChange.bind(this, "password")}
                className="text-fields__application__price md-cell md-cell--3 md-cell--1-phone"
                required
            />
            <Button raised primary type="submit" className="md-cell--right">Submit</Button>
        </form>
      )
    }
}
  
export default Register;