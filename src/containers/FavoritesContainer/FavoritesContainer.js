import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as API from '../../APIcalls'
import { storeFavorites, signOut} from '../../actions'
import MovieCard from '../MovieCard/MovieCard'
import '../MoviesContainer/_movieContainer.scss'


export class FavoritesContainer extends Component {
  constructor() {
    super()
    this.state = {
      favoritesEmpty: false
    }
  }

  componentDidMount = async () => {
    const favorites = await API.fetchFavorites(this.props.user.id)
    if (favorites.data.length > 0) {
      await this.props.storeFavorites(favorites.data)
      await this.setState({ favoritesEmpty: false })
    } else {
      await this.setState({ favoritesEmpty: true})
    }
  }

  handleSignOut = () => {
    this.props.signOut()
  }

  render () {
    const displayFavorites = this.props.favorites.map(movie => {
      return <MovieCard movie={movie} movieID={movie.movie_id} />
    })

    return(
      <section>
        <header className="movie-header">
          <h1 className="logo">Laff Tracker</h1>
          <nav>
          <Link to='/movies'>
            <button>Top Comedies</button>
          </Link>
          <Link to='/login'>
            <button onClick={this.handleSignOut}>Sign Out</button>
          </Link>
        </nav>
        <p className="welcome">Welcome, {this.props.user.name}</p>
        </header>
        <article className="movie-container">
          { displayFavorites }
          { this.state.favoritesEmpty ? <p>You don't have any favorite movies yet</p> : undefined }
        </article>
      </section>  
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
})

export const mapStateToProps = (state) => ({
  favorites: state.favorites,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)