import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {
  constructor(){
    //must call super() when implementing the constructor in order to call initial constructor
    //this is a way to override the constructor
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
      },
      list: [
        {body: 'comment 1', username: 'dtrump', timestamp:'10:30'},
        {body: 'comment 2', username: 'hclinton', timestamp:'10:40'},
        {body: 'comment 3', username: 'bsanders', timestamp:'10:45'}
      ]
    }
  }

  submitComment(){
    console.log('submitComment: ' + JSON.stringify(this.state.comment))
    //update state for new comments
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)

    this.setState({
      list: updatedList
    })
  }

  updateUsername(event){
    console.log('updateUsername: '+ event.target.value)
    //create a copy of the state and re assign with event value
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value
    //change state
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event){
    console.log('updateBody: '+ event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value
    //change state
    this.setState({
      comment: updatedComment
    })
  }

  render(){
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment currentComemnt={comment} /></li>
      )
    })

    return(
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentBox}>
          <ul style={styles.comment.commentsList}>
            { commentList }
          </ul>


          <input onChange={this.updateUsername.bind(this)} className="form-control"type="text" placeholder="Username" /><br />
          <input onChange={this.updateBody.bind(this)} className="form-control"type="text" placeholder="Comment" /><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

        </div>
      </div>
    )
  }
}

export default Comments
