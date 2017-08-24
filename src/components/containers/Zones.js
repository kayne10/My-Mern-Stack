import React, { Component } from 'react'
import Zone from '../presentation/Zone'

class Zones extends Component {
  constructor(){
    super()
    //defining the state
    this.state = {
      list: [
        {name:'Zone 1', zipCode:'10012', numComments:10},
        {name:'Zone 2', zipCode:'10013', numComments:4},
        {name:'Zone 3', zipCode:'10014', numComments:123},
        {name:'Zone 4', zipCode:'10015', numComments:15}
      ]
    }
  }

  render(){
    // access the list property within the state object
    // => is an es6 callback function

    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}><Zone currentZone={zone} /></li> // {zone} is the prop from
      )
    })

    return (
      <div>
        <ol>
          {listItems}
        </ol>
      </div>
    )
  }
}


// es6 Export Component
export default Zones
