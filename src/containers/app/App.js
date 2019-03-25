import React, { Component } from 'react'
import Login from '../login/Login'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import { SignUp } from '../signUp/SignUp'
import './App.css'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          !this.props.user.name ? (
            <Redirect to="/login"/>
          ) : (
            <Redirect to="/movies"/>
          )
        )}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/movies' component={MoviesContainer} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/favorites' component={FavoritesContainer} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(App)
