export const movieCleaner = (movies) => {
  return movies.results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview
    }
  })
}