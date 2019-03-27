import React, { Component } from 'react'
import * as API from '../../APIcalls'
import { Redirect, Link } from 'react-router-dom'
import '../login/_login.scss'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      signUpSuccessful: false,
      signUpUnsuccessful: false,
      redirect: false
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
      setTimeout(() => this.setState({ redirect: true }), 2000)
      this.setState({ signUpSuccessful: true, signUpUnSuccessful: false })
    } else {
      this.setState({ signUpUnsuccessful: true })
    }
  }

  render() {
    const { signUpSuccessful, signUpUnsuccessful, redirect } = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
    return(
      <section className="login-page">
        { signUpSuccessful ? <p>Your account has been created! Redirecting to login page</p> : undefined }
        { signUpUnsuccessful ? <p>Sorry, that email is already in use. Please enter a new email</p> : undefined}
        <p className="logo">Laff Tracker</p>
        <p>Sign up now to browse and save the best films in comedy!</p>
        <form className="signup-form" onSubmit={this.handleSubmit}>
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
          <button className="signin-btn" type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}