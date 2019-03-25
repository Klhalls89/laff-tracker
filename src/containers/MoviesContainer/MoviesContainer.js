import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as API from '../../APIcalls'
import { storeMovies, signOut} from '../../actions'
import MovieCard from '../MovieCard/MovieCard'

export class MoviesContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount = async () => {
    const movies = await API.fetchMovies()
    await this.props.storeMovies(movies)
  }

  handleSignOut = () => {
    this.props.signOut()
  }

  render () {
    const displayMovies = this.props.movies.map(movie => {
      return <MovieCard movie={movie} />
    })
    return(
      <section>
        <nav>
          <Link to='/favorites'>
            <button>Favorites</button>
          </Link>
          <Link to='/login'>
            <button onClick={this.handleSignOut}>Sign Out</button>
          </Link>
        </nav>
        { displayMovies }
      </section>  
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  storeMovies: (movies) => dispatch(storeMovies(movies))
})

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
