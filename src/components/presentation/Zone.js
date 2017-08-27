// Sub component for Zones component
import React, { Component } from 'react'
import styles from './styles'



class Zone extends Component {

  onSelectTitle(event){
    event.preventDefault()
    console.log('onSelectTitle: '+this.props.index);
    this.props.select(this.props.index)
  }

  render(){
    const zoneStyle = styles.zone
    const zipCode = this.props.currentZone.zipCodes[0]
    // if statement == (params) ? 'true' : 'false'
    const title = (this.props.isSelected) ? <a style={zoneStyle.title} href="#">{this.props.currentZone.name}</a>
    : <a href="#">{this.props.currentZone.name}</a>


    return (
      // Define component props
      <div style={zoneStyle.container}>
        <h2 onClick={this.onSelectTitle.bind(this)} style={zoneStyle.header}>
          { title }
        </h2>
        <span className="detail">Zip Code: {zipCode}</span><br />
        <span className="detail">{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}


// Export Component
export default Zone
