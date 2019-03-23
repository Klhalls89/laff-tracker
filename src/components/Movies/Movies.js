import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions'
import { Link } from 'react-router-dom'
import * as API from '../../APIcalls'

export class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const movies = API.fetchMovies()
    this.setState({ movies })
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
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Movies)
