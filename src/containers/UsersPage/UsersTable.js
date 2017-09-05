import React, {Component} from 'react'
import {connect} from 'react-redux'
import update from 'immutability-helper'
// import {Link} from 'react-router-dom'

import User from './User'

import {fetchUsers, changeSort, delUser, changeUser} from './actions'
import {dataUsers, dataBuildings, dataTarifs} from '../App/data'
// import stl from './index.css'

class UsersTable extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const {users, isLoading, onDelete, onSort, onChangeUserField} = this.props

    return (
        <table>
          <thead>
            <tr>
              <th> {users.length }  Name </th>
              <th><a onClick={onSort.bind(this, 'building')}>hhhBuilding (select)</a></th>
              <th><a onClick={onSort.bind(this, 'tarif')}>Tarif (radio)</a></th>
              <th>End of land leasing (date)</th>
              <th><a onClick={onSort.bind(this, 'debt')}>Debt (float)</a></th>
              <th>Active (checkbox)</th>
              <th>Actions (buttons)</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ?
              <tr><td colSpan="7">Loading...</td></tr> :
              (
                users.length ?
                users.map((user, index) =>
                  <User
                    key={user.id}
                    data={user}
                    onChangeBuilding={onChangeUserField.bind(this, user.id, 'building')}
                    onChangeActive={onChangeUserField.bind(this, user.id, 'active')}
                    onDelete={onDelete.bind(this, user.id)}
                  />
                ) :
                <tr><td colSpan="7">Empty...</td></tr>
              )
            }

          </tbody>
        </table>
    )
  }
}













function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const mapStateToProps = (state) => {
  let {users: {items: users, isLoading, sort}, filterName} = state

  return {
    sort,
    isLoading,
    users: (filterName !== '' ?
      users.filter(user => (new RegExp(`${filterName}`, 'i').test(user.name) ) ) :
      users
    ).sort( dynamicSort(sort) ),

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (id, e) => {
      dispatch(delUser(id))
    },
    onChangeUserField: (id, field, e) => {
      dispatch(changeUser(id, {[field]: e.target.value}))
      // this.setState(update(this.state, {users: {[index]: {active: {$set: e.target.checked}}}}))
    },
    dispatch
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onSort: (property) => {
      dispatchProps.dispatch(changeSort(stateProps.sort === property ? '-' + property : property))
    }
  }
}

// export default UsersTable
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UsersTable)
