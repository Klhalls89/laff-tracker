import React, { Component } from 'react'
import Login from '../login/Login'
import Movies from '../../components/Movies/Movies'
import './App.css'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          !this.props.user.email ? (
            <Redirect to="/login"/>
          ) : (
            <Redirect to="/movies"/>
          )
        )}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/movies' component={Movies} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(App)
