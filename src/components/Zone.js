// Sub component for Zones component
import React, { Component } from 'react'
import styles from './styles'



class Zone extends Component {

  render(){
    const zoneStyle = styles.zone
    return (
      // Define component props
      <div style={zoneStyle.container}>
        <h2 style={zoneStyle.header}>
          <a style={zoneStyle.title} href="#">{this.props.zone.name}</a>
        </h2>
        <span className="detail">Zip Code: {this.props.zone.zipCode}</span><br />
        <span className="detail">{this.props.zone.numComments} comments</span>
      </div>
    )
  }
}


// Export Component
export default Zone
