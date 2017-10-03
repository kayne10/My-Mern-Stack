import React, { Component } from 'react'
import map from 'lodash/map'
//import axios from 'axios'

class SignUpForm extends {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    // use APIManager
    // axios.post('api/account', {user:this.state})
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
          <h1>Join our community!</h1>

          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            checkUserExists={this.checkUserExists}
            value={this.state.username}
            field="username"
          />

          <TextFieldGroup
            error={errors.email}
            label="Email"
            onChange={this.onChange}
            checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
          />

          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
          />

          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
          />

          <div className={classnames("form-group", { 'has-error': errors.timezone })}>
            <label className="control-label">Timezone</label>
            <select
              className="form-control"
              name="timezone"
              onChange={this.onChange}
              value={this.state.timezone}
            >
              <option value="" disabled>Choose Your Timezone</option>
              {options}
            </select>
            {errors.timezone && <span className="help-block">{errors.timezone}</span>}
          </div>

          <div className="form-group">
            <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
    )
  }
}




export default SignUpForm
