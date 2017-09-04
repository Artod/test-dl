import React, {Component} from 'react'
import update from 'immutability-helper';
// import {Link} from 'react-router-dom'

import User from './User'

import {dataUsers, dataBuildings, dataTarifs} from '../App/data'
// import stl from './index.css'

class UsersTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sort: 'id',
      users: []
    }

    // this.onChangeActive = this.onChangeActive.bind(this)
    // this.onChangeBuilding = this.onChangeBuilding.bind(this)
    //this.onDelete = this.onDelete.bind(this)
  }

  componentWillMount() {
    this.loadUsers()
  }

  loadUsers() {
    setTimeout(() => this.setState({users: dataUsers.users}), 1)
  }

  onChangeActive(index, e) {
    this.setState(update(this.state, {users: {[index]: {active: {$set: e.target.checked}}}}))
    setTimeout(() => console.dir(this.state), 1)
  }

  onChangeBuilding(index, e) {
    // let newUsers = this.state.users.map(user => user.id === prevUser.id ?  : user)
    // newUsers
    this.setState(update(this.state, {users: {[index]: {building: {$set: e.target.value}}}}))

e.target.blur()


  }

  sorting(property) {
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

    this.setState({
      sort: this.state.sort === property ? '-' + property : property,
      users: this.state.users.sort( dynamicSort(this.state.sort) )
    })

    setTimeout(() => console.log(this.state), 1)
  }

  onDelete(index, e) {
    this.setState(update(this.state, {users: {$splice: [[index, 1]]}}))
  }

  onSubmit(e) {
      e.preventDefault()
    this.setState(update(this.state, {users: {$push: [{id: (new Date()).getMilliseconds(), name: this.newName.value, active: true}]}}))
// console.dir(update(this.state, {users: {$push: [{id: 656, name: this.newName, active: true}]}}))
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> {this.state.users.length }  Name (string)</th>
              <th><a onClick={this.sorting.bind(this, 'building')}>Building (select)</a></th>
              <th><a onClick={this.sorting.bind(this, 'tarif')}>Tarif (radio)</a></th>
              <th>End of land leasing (date)</th>
              <th><a onClick={this.sorting.bind(this, 'debt')}>Debt (float)</a></th>
              <th>Active (checkbox)</th>
              <th>Actions (buttons)</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.length ?
              this.state.users.map((user, index) =>
                <User key={user.id} data={user} onChangeBuilding={this.onChangeBuilding.bind(this, index)} onChangeActive={this.onChangeActive.bind(this, index)} onDelete={this.onDelete.bind(this, index)} />
              ) :
              <tr><td colSpan="7">{typeof this.state.users } Loading...</td></tr>
            }

          </tbody>
        </table>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref={input => this.newName = input} type="text" name="name" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default UsersTable
