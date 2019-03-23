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
})
