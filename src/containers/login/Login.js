import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return(
      <section className='login-page'>
        <form>
          <h2>Laff Track</h2>
          <p>Welcome</p>
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="password"/>
          <button type="submit">Sign In</button>
          <p>or Sign Up, <span>here</span></p>
        </form>
      </section>
    )
  }

}

export default Login