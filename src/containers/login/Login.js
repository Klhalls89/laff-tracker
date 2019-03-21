import React, { Component } from 'react'
import * as API from '../../APIcalls'
import { connect } from 'react-redux'
import { signIn } from '../../actions'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      invalidPassword: false,
      invalidEmail: false,
      signInSuccessful: false
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const users = await API.signIn()
    users.data.forEach(user => {
      if (user.email === email && user.password === password) {
        this.props.signIn(user.email, user.name)
        this.setState({signInSuccessful: true})
      } else if (user.email === email && user.password !== password) {
         this.setState({ invalidPassword: true })
      } else {
        this.setState({ invalidEmail: true, invalidPassword: false })
      }
    })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value} )
  }

  render() {
    const { invalidEmail, invalidPassword, signInSuccessful } = this.state
    if (signInSuccessful) {
      return <Redirect to='/' />
    }
    return(
      <section className='login-page'>
        <form onSubmit={this.handleSubmit} >
          <h2>Laff Tracker</h2>
          <p>Welcome! Please sign in</p>
          <input  type="email" 
                  name="email" 
                  placeholder="email" 
                  value={this.state.email} 
                  onChange={this.handleInputChange}
          />
          { invalidEmail ? <p>The email you entered is not valid</p> : undefined  }
          <input  type="password" 
                  name="password" 
                  placeholder="password" 
                  value={this.state.password}
                  onChange={this.handleInputChange}
          />
          { invalidPassword ? <p>The password you entered is incorrect</p> : undefined  }
          <button type="submit">Sign In</button>
          <p>Don't have an account? Sign up <span>here</span></p>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signIn: (email, name) => dispatch(signIn(email, name))
})

export default connect(null, mapDispatchToProps)(Login)   