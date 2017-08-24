import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {

  render(){
    return(
      //define comment props
      <div style={{marginBottom:16}}>
        <p style={styles.comment.commentBox.body}>
          {this.props.currentComemnt.body}
        </p>
        <span style={styles.comment.commentBox.commentFooter}>{this.props.currentComemnt.username}</span>
        <span style={styles.comment.commentBox.pipe}>|</span>
        <span style={styles.comment.commentBox.commentFooter}>{this.props.currentComemnt.timestamp}</span>
        <hr />
      </div>
    )
  }
}

export default Comment
