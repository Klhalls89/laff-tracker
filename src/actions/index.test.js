import * as actions from './index'

describe ('actions', () => {
    it('should return a type of SIGN_IN', () => {
        const name = 'Kristen'
        const id = 1
        const expected = { 
            type: 'SIGN_IN',
            name,
            id
        }
        const result = actions.signIn(name, id)
        expect(result).toEqual(expected)
    })

    it('should return a type of SIGN_OUT', () => {
        const expected = {
            type: 'SIGN_OUT'
        }
        const result = actions.signOut()
        expect(result).toEqual(expected)
    })

    it('should return a type of STORE_MOVIES with an array of movies', () => {
        const movies = [{title: 'Space Jam'}, {title: 'Interstellar'}]
        const expected = {
            type: 'STORE_MOVIES',
            movies
        }
        const result = actions.storeMovies(movies)
        expect(result).toEqual(expected)
    })

    it('should return a type of STORE_FAVORITES with an array of favorites', () => {
        const favorites = [{title: 'Space Jam'}, {title: 'Interstellar'}]
        const expected = {
            type: 'STORE_FAVORITES',
            favorites
        }
        const result = actions.storeFavorites(favorites)
        expect(result).toEqual(expected)
    })
})
