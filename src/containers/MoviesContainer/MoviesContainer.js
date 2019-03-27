import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as API from '../../APIcalls'
import { storeFavorites, storeMovies, signOut} from '../../actions'
import MovieCard from '../MovieCard/MovieCard'
import { fetchMovies } from '../../thunks/thunk'
import './_movieContainer.scss'
const API_KEY = `${process.env.REACT_APP_API_KEY}`

export class MoviesContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=35'
    const movies = await fetchMovies(url)
    // await this.props.storeMovies(movies)
    const favorites = await API.fetchFavorites(this.props.user.id)
    if (favorites.data) {
      await this.props.storeFavorites(favorites.data)
    }
  }

  handleSignOut = () => {
    this.props.signOut()
  }

  render () {
    const displayMovies = this.props.movies.map(movie => {
      return <MovieCard movie={movie} movieID={movie.id} />
    })
    return(
      <section className="movie-page">
        <header className="movie-header">
          <p className="logo">Laff Tracker</p>
          <nav>
            <Link to='/favorites'>
              <button>Favorites</button>
            </Link>
            <Link to='/login'>
              <button onClick={this.handleSignOut}>Sign Out</button>
            </Link>
          </nav>
        </header>
        <article className="movie-container">
        { displayMovies }
        </article>
      </section>  
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  storeMovies: (movies) => dispatch(storeMovies(movies)),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
})

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
