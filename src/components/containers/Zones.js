import React, { Component } from 'react'
import { Zone, CreateZone } from '../presentation/'
import { APIManager } from '../../utils'


class Zones extends Component {
  constructor(){
    super()
    //defining the state by overriding
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      selected: 0,
      list: []
    }
  }

  //function gets called prior to component. Grabs data from REST API
  componentDidMount(){
    console.log('componentDidMount: ');
    APIManager.get('/api/zone', null, (err, response) => {
      if (err) {
        alert('ERROR: '+err.message)
        return
      }
      // console.log('ZONE_RESULTS: '+JSON.stringify(response.results));
      this.setState({
        list: response.results
      })
    })

  }

  //copy the state.list
  //update state.list after fetching data with APIManager
  //call setState for complete update
  addZone(zone){
    let updatedZone = Object.assign({}, zone)
    APIManager.post('/api/zone', updatedZone, (err, response) => {
      if (err){
        alert('ERROR: '+err.message)
        return
      }
      console.log('ZONE CREATED: '+JSON.stringify(response));
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({
        list: updatedList
      })

    })

    // updatedList.push(this.state.zone)
    // this.setState({
    //   list: updatedList
    // })
  }


  selectZone(index){
    console.log('selectZone: '+index);
    this.setState({
      selected: index
    })
  }


  render(){
    // access the list property within the state object
    // => is an es6 callback function

    const listItems = this.state.list.map((zone, i) => {
      let selected = (i==this.state.selected)
      return (
        <li key={i}>
          <Zone index={i} select={this.selectZone.bind(this)} isSelected={selected} currentZone={zone} />
        </li> // {zone} is the prop
      )
    })

    return (
      <div>
        <h1>Zones</h1>
        <ol>
          {listItems}
        </ol>

        <CreateZone onCreate={this.addZone.bind(this)} />
      </div>
    )
  }
}


// es6 Export Component
export default Zones
