import React, {Component} from 'react'
// import {Route} from 'react-router-dom'

import UsersTable from './UsersTable'
// import UserProfile from '../UserProfile'

// import stl from './index.css'

import {dataUsers/*, dataBuildings, dataTarifs*/} from '../App/data'

class UserProfile extends Component {
  render() {
    return (
      <section>
        <h2>User page</h2>

        <UsersTable data={dataUsers.users.filter((user) => user.id === this.props.match.id)} />

      </section>
    )
  }
}

export default UserProfile
