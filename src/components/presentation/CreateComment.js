//This component is for holding the essential functions that get passed on to container component
import React, { Component } from 'react'

class CreateComment extends Component {
  constructor(){
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
      }
    }
  }

  updateComment(event){
    console.log('updateComment: '+event.target.id + ' == ' + event.target.value);
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment[event.target.id] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  submitComment(event){
    console.log('submitComment: '+JSON.stringify(this.state.comment));
    this.props.onCreate(this.state.comment)
    // let updatedComment = Object.assign({}, this.state.comment)

  }


  render(){
    return (

      <div>
        <h3>Create Comment</h3>
        <input onChange={this.updateComment.bind(this)} id="username" className="form-control"type="text" placeholder="Username" /><br />
        <input onChange={this.updateComment.bind(this)} id="body" className="form-control"type="text" placeholder="Comment" /><br />
        <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
      </div>

    )
  }
}

export default CreateComment
