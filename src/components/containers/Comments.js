import React, { Component } from 'react'
import { Comment, CreateComment } from '../presentation/'
import styles from './styles'
import { APIManager } from '../../utils/'

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
    APIManager.get('/api/comment', null, (err, response) => {
      if (err) {
        alert('ERROR: '+err.message)
        return
      }

      this.setState({
        list: response.results
      })
    })
  }

  //comment gets passed in through CreateComment props
  submitComment(comment){
    console.log('submitComment: '+JSON.stringify(comment))
    let updatedComment = Object.assign({}, comment)
    APIManager.post('/api/comment', updatedComment, (err, response) => {
      if (err){
        alert(err)
        return
      }

      console.log(JSON.stringify(response));
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({
        list: updatedList
      })
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

          <CreateComment onCreate={this.submitComment.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Comments
