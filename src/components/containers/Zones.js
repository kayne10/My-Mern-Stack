import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
  constructor(){
    super()
    //defining the state by overriding
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: []
    }
  }

  //function gets called prior to component. Grabs data from REST API
  componentDidMount(){
    console.log('componentDidMount: ');
    superagent
      .get('/api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {

        if (err) {
          alert('ERROR: '+err)
          return
        }

        console.log(JSON.stringify(response.body));
        let results = response.body.results
        this.setState({
          list: results
        })
      })
  }

  //copy the state
  //update state
  //call setState for complete update
  updateZone(event){
    console.log('updateZone: ' + event.target.id + ' == ' + event.target.value);
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  //copy the state.list
  //update state.list
  //call setState for complete update
  addZone(){
    console.log('ADD ZONE: '+JSON.stringify(this.state.zone));
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({
      list: updatedList
    })
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
        <h1>Zones</h1>
        <ol>
          {listItems}
        </ol>

        <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
        <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="zipCode" /><br />
        <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}


// es6 Export Component
export default Zones
