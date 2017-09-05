import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import {dataUsers, dataBuildings, dataTarifs} from '../App/data'
// import stl from './index.css'

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tarifOnEdit: false,
      buildingsOnEdit: false,
      endOnEdit: false
    }

    this.onClickTarif = this.onClickTarif.bind(this)
    this.onClickBuildings = this.onClickBuildings.bind(this)
    this.onClickEnd = this.onClickEnd.bind(this)
  }

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  onClickTarif() {
    this.setState({tarifOnEdit: true })
      console.dir(this.state)
  }

  onBlurTarif() {
    this.setState( { tarifOnEdit: false })
    console.dir(this.state)
  }

  onClickBuildings() {
    this.setState({buildingsOnEdit: true })
    console.dir(this.state)
    // setTimeout(() => this.selectBuilding, 0)
  }

  onBlurChangeBuild() {
    this.setState( { buildingsOnEdit: false })
    console.dir(this.state)
  }

  onClickEnd() {

  }

  render() {
    const {data: user, onChangeBuilding, onChangeActive, onDelete} = this.props

    return (
      <tr>
        <td>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </td>
        {this.state.buildingsOnEdit
          ?
          <td>
            <select
              ref={input => input && input.focus()}
              value={user.building}
              onChange={onChangeBuilding}
              onBlur={this.onBlurChangeBuild.bind(this)}
            >
            {
              Object.keys(dataBuildings).map(key => <option key={key} value={key}>{dataBuildings[key]}</option>)
            }
            </select>
          </td>
          :
          <td onClick={this.onClickBuildings}>{dataBuildings[user.building]}</td>
        }

        {this.state.tarifOnEdit
          ?
          <td>
            <input type="text" ref={input => input && input.focus()} onBlur={this.onBlurTarif.bind(this)}/>
          </td>
          :
          <td onClick={this.onClickTarif}>{dataTarifs[user.tarif]}</td>
        }
        <td onClick={this.onClickEnd}>{user.end}</td>
        <td>${user.debt}</td>
        <td>
          <input type="checkbox" value="checked" checked={user.active} onChange={onChangeActive} />
        </td>
        <td><button onClick={onDelete}>Delete</button></td>
      </tr>
    )
  }
}


export default User
