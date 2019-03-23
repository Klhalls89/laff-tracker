import React, { Component } from 'react'
import * as API from '../../APIcalls'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      signUpSuccessful: false,
      signUpUnsuccessful: false
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const signUpStatus = await API.signUp(this.state)
    if (signUpStatus === 'success') {
      this.setState({ signUpSuccessful: true, signUpUnSuccessful: false })
    } else {
      this.setState({ signUpUnsuccessful: true })
    }
  }

  render() {
    const { signUpSuccessful, signUpUnsuccessful } = this.state
    return(
      <section>
        { signUpSuccessful ? <p></p> : undefined}
        { signUpUnSuccessful ? <p>Sorry, that email is already in use. Please enter a new email</p> : undefined}
        <h3>Sign up now to browse and save the best films in comedy!</h3>
        <form onSubmit={this.handleSubmit}>
          <input  type='text'
                  value={this.state.name}
                  name='name'
                  onChange={this.handleInputChange}
                  placeholder='name'
          />
          <input  type='email'
                  value={this.state.email}
                  name='email'
                  onChange={this.handleInputChange}
                  placeholder='email'
          />
          <input  type='password'
                  value={this.state.password}
                  name='password'
                  onChange={this.handleInputChange}
                  placeholder='password'
          />
          <button type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}