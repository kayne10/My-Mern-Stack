import React, { Component } from 'react'
import SignUpForm from '../presentation/SignUpForm'
import { userSignupRequest } from '../../actions/signupAction'

class SignUp extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
  userSignupRequest: React.propTypes.func.isRequired
}


export default SignUp;
