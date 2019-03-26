import React, { Component } from 'react'
import * as API from '../../APIcalls'
import { connect } from 'react-redux'
import { storeFavorites } from '../../actions'

export class MovieCard extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  } 

  handleFavorite = async (movieTitle, movieID) => {
    const foundFavorite = this.props.favorites.find(favorite => favorite.title === movieTitle)
    console.log(foundFavorite)
    if (foundFavorite === undefined) {
      await API.addFavorite( this.props.movie.id, this.props.user.id, this.props.movie)
    } else {
      await API.deleteFavorite(this.props.user.id, movieID)
    }
    const favorites = await API.fetchFavorites(this.props.user.id)
    await this.props.storeFavorites(favorites.data)
  }

  render() {
    return(
      <article>
        <button onClick={() => this.handleFavorite(this.props.movie.title, this.props.movie.id)} >Favorite</button>
        <h3>{this.props.movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w200${this.props.movie.poster_path}`} />
        <p>{this.props.movie.overview}</p>
        <p>{this.props.movie.release_date}</p>
        <p>{this.props.movie.vote_average}</p>
      </article>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))  
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)