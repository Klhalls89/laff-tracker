import React, { Component } from 'react'
import * as API from '../../APIcalls'
import { connect } from 'react-redux'
import { signIn } from '../../actions'
import './_login.scss'
import { Redirect, Link } from 'react-router-dom'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      signInUnsuccessful: false,
      signInSuccessful: false
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const loginAttempt = await API.signIn(this.state)
    if (loginAttempt.status === 'success') {
      this.props.signIn(loginAttempt.name, loginAttempt.id)
      this.setState({signInSuccessful: true})
    } else {
      this.setState({ signInUnsuccessful: true })
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value} )
  }

  render() {
    const { signInUnsuccessful, signInSuccessful } = this.state
    if (signInSuccessful) {
      return <Redirect to='/' />
    }
    return(
      <section className='login-page'>
        <form onSubmit={this.handleSubmit} >
          <h2 className="logo">Laff Tracker</h2>
          <p className="welcome">Welcome!</p>
          <input  type="email" 
                  name="email" 
                  placeholder="email" 
                  value={this.state.email} 
                  onChange={this.handleInputChange}
          />
          <input  type="password" 
                  name="password" 
                  placeholder="password" 
                  value={this.state.password}
                  onChange={this.handleInputChange}
          />
          { signInUnsuccessful ? <p>The username or password you entered is invalid</p> : undefined  }
          <button className="signin-btn" type="submit">Sign In</button>
          <p>Don't have an account? Sign up <Link to='/signup'><button className="signup-btn">here</button></Link></p>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signIn: (email, name) => dispatch(signIn(email, name))
})

export default connect(null, mapDispatchToProps)(Login)   