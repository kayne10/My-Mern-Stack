import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component {
  constructor(){
    //must call super() when implementing the constructor in order to call initial constructor
    //this is a way to override the constructor
    super()
    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: ''
      },
      list: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount: ');
    superagent
      .get('/api/comment')
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

  updateTime(event){
    console.log('updateTime: '+ event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = event.target.value
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
          <input onChange={this.updateTime.bind(this)} className="form-control"type="text" placeholder="Time" /><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

        </div>
      </div>
    )
  }
}

export default Comments
