// importing sub modules from main react module\
// es6 equivalent to var React = require('react')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Zones from './components/Zones'

class App extends Component {


  render(){
    return (
      <div>
        Hello React!
        Welcome to my MERN stack!
        <Zones />
      </div>
    )
  }
}

//Inside the DOM, find the id tag called root and run all the react code
ReactDOM.render(<App />, document.getElementById('root'))
