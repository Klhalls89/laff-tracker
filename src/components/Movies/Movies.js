import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions'
import { Link } from 'react-router-dom'

export const Movies = (props) => {

  const handleSignOut = () => {
    props.signOut()
  }

  return(
    <section>
      <nav>
        <Link to='/login'>
          <button onClick={handleSignOut}>Sign Out</button>
        </Link>
      </nav>
      MOVIES!
    </section>  
  )
}

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Movies)