import React, { Component } from 'react'
import * as API from '../../APIcalls'
import { connect } from 'react-redux'

export class MovieCard extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  }

  render() {
    return(
      <article>
        <button onClick={() => API.addFavorite( this.props.movie.id, this.props.user.id, this.props.movie)} >Favorite</button>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.overview}</p>
        <p>{this.props.movie.release_date}</p>
        <p>{this.props.movie.vote_average}</p>
      </article>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(MovieCard)