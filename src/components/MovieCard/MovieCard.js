import React, { Component } from 'react'
import * as API from '../../APIcalls'

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
        <button >Favorite</button>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.overview}</p>
        <p>{this.props.movie.release_date}</p>
        <p>{this.props.movie.vote_average}</p>
      </article>
    )
  }

}