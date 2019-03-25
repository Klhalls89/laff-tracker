import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut, storeMovies } from '../../actions'
import { Link } from 'react-router-dom'
import * as API from '../../APIcalls'
import MovieCard from '../MovieCard.js'

export class Movies extends Component {
  constructor() {
    super()
  }

  componentDidMount = async () => {
    const movies = await API.fetchMovies()
    await this.props.storeMovies(movies)
  }

  handleSignOut = () => {
    this.props.signOut()
  }
  
  displayCard = (props) => {
   return props.movies.map((movie)=> {
      return <MovieCard movie={movie}/>
    })
  }

  render () {
    return(
      <section>
        <nav>
          <Link to='/login'>
            <button onClick={this.handleSignOut}>Sign Out</button>
          </Link>
        </nav>
        <h2>Funny Movies</h2>
        {this.displayCard}
      </section>  
    )
  }
}

export const mapStateToProps = (props) => ({
  movies: props.movies
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  storeMovies: (movies) => dispatch(storeMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
