import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut, displayMovies } from '../../actions'
import { Link } from 'react-router-dom'
import * as API from '../../APIcalls'

export class Movies extends Component {
  constructor() {
    super()
  }

  componentDidMount = async () => {
    const movies = await API.fetchMovies()
    await this.props.displayMovies(movies)
  }

  handleSignOut = () => {
    this.props.signOut()
  }

  render () {
    return(
      <section>
        <nav>
          <Link to='/login'>
            <button onClick={this.handleSignOut}>Sign Out</button>
          </Link>
        </nav>
        MOVIES!
      </section>  
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  displayMovies: (movies) => dispatch(displayMovies(movies))
})

export default connect(null, mapDispatchToProps)(Movies)
