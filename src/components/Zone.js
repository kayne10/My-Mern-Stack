// Sub component for Zones component
import React, { Component } from 'react'

class Zone extends Component {


  render(){
    return (
      <div>
        <h2><a href="#">{this.props.zone.name}</a></h2>
        <span>Zip Code: {this.props.zone.zipCode}</span><br />
        <span>{this.props.zone.numComments} comments</span>
      </div>
    )
  }
}


// Export Component
export default Zone
