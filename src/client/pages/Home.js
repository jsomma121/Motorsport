import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
      return (
        <div>
           <Link to={`/register`}> <button href='/register'>Register</button> </Link>
           <Link to={`/login`}> <button href='/login'>Login</button> </Link>
        </div>
      )
    }
  }
  
  export default Home;