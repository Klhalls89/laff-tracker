import { Login, mapDispatchToProps } from './Login'
import { signIn } from '../../actions'

describe('Login', () => {

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = signIn('Taylor', 1)
      const mappedProps = mapDispatchToProps(mockDispatch)
      console.log(mappedProps)
      mappedProps.signIn('Taylor', 1)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })


})