import * as actions from './index'

describe ('actions', () => {
	it('should return a type of SIGN_IN', () => {
		const id = '1'
		const name = 'Kristen'
		const expected = { 
			type: 'SIGN_IN',
			email,
			name
		}
		const result = actions.signIn(email, name)
		expect(result).toEqual(expected)
	})

	it('should return a type of SIGN_OUT', () => {
		const expected
	})
})