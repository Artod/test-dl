import React, {Component} from 'react'
// import {Route} from 'react-router-dom'

import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'
import UsersFilter from './UsersFilter'
// import UserProfile from '../UserProfile'

// import stl from './index.css'

import {dataUsers/*, dataBuildings, dataTarifs*/} from '../App/data'

class UserProfile extends Component {
  render() {

    return (
      <section>
        <h2>User page</h2>
        
        <UsersFilter />
        <UsersTable />
        <UsersAdd />
      </section>
    )
  }
}

export default UserProfile
