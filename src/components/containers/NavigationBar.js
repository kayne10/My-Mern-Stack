import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Link, IndexLink } from 'react-router';
import Auth from '../../modules/Auth';

//With React router is better practice

class NavigationBar extends Component {



  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink to="/" className="navbar-brand">React App</IndexLink>
          </div>

          <div className="navbar-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
          <div className="navbar-right">
            <Link to="/logout">Log out</Link>
          </div>
        </div>
      </nav>
    )
  }
}


export default NavigationBar
