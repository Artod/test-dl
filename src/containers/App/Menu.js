import React from 'react'
import {Link} from 'react-router-dom'

import stl from './index.css'

function Menu(props) {
    return (
      <nav className={`Menu ${stl.menu}`}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/sign-in">Sign in</Link>
      </nav>
    )
}

export default Menu
