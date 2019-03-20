import React, { Component } from 'react';
import * as API from '../../APIcalls'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const users = await API.signIn()
    users.data.forEach(user => {
      if (user.email === email && user.password === password) {
        //dispatch action
      }
    })
  
    //api call with user data
    //if success -> dispatch action
    //if failure, display "Email/password not valid"
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value} )
  }


  render() {
    return(
      <section className='login-page'>
        <form onSubmit={this.handleSubmit} >
          <h2>Laff Tracker</h2>
          <p>Welcome</p>
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
          <button type="submit">Sign In</button>
          <p>or Sign Up, <span>here</span></p>
        </form>
      </section>
    )
  }

}

export default Login