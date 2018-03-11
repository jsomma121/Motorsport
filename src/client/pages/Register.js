import React, { Component } from 'react';
import { Button, CardActions, SelectionControl, SelectionControlGroup, Snackbar, TextField } from 'react-md';
import {dataBase} from '../../server/base';
import {register} from '../../server/auth';
import {
  Link,
  withRouter,
  Redirect, 
} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
		super(props);
		this.state = {
			email: '',
            password:'',
            confirmPassword: '',
            success: false,
            errorMessage:'',
            user: ''
		}
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit');   
        console.log(this.state);
          const {
            email, 
            password, 
            confirmPassword, 
            errorMessage
        } = this.state;
        console.log(email);
            console.log(password);
                console.log(confirmPassword);
                 


        dataBase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(authUser => {
            this.setState(() => ({user: authUser}));
            console.log(this.state.user);
        })
        .catch(error => {
            this.setState({error: error})
        });

    //    console.log("EMAIL" + email.value);
    //     dataBase.auth().createUserWithEmailAndPassword(email.value, password.value).catch((error) => { 
    //        if (error) {
    //             console.log("APP 🅱️ROKE");
    //             console.log(error);
    //             return;
    //         }
    //         else {
    //         console.log("APP not 🅱️ROKE");
    //         }        
    //     })       
    }

    handleChange = (name, value) => {
       
        this.setState({ [name]: { value } })
       
	}
 
    render() {
        const {
            email, 
            password, 
            confirmPassword, 
            errorMessage
        } = this.state;

        console.log(email, password, confirmPassword, errorMessage);


        const isInvalid = password != confirmPassword ||
        password === '' || confirmPassword === '' || email === '';
        console.log("is validation working ---" + isInvalid);
    

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
                type="password"
                value={this.state.password.value}
                onChange={this.handleChange.bind(this, "password")}
                className="text-fields__application__price md-cell md-cell--3 md-cell--1-phone"
                required
            />
            <TextField
                id="confirmPassword"
                label="Confirm password"
                type="password"
                value={this.state.confirmPassword.value}
                onChange={this.handleChange.bind(this, "confirmPassword")}
                className="text-fields__application__price md-cell md-cell--3 md-cell--1-phone"
                required
            />
            {/* {errorMessage && 
                <p> {errorMessage} </p>
            } */}

            <Button raised primary type="submit" className="md-cell--right">Submit</Button>
        </form>
      )
    }
}
  
export default Register;