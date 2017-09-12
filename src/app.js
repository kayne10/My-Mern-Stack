// importing sub modules from main react module\
// es6 equivalent to var React = require('react')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'
import Dashboard from './components/layout/DashboardPage'
import routes from './routes.js';

class App extends Component {


  render(){
    return (
      <div>
        <Home />
        <Dashboard />
      </div>
    )
  }
}

//Inside the DOM, find the id tag called root and run all the react code
ReactDOM.render(<App />, document.getElementById('root'))

export default App
