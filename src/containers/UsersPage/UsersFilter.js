import React from 'react'
import {setFilter} from './actions'
import {connect} from 'react-redux'

const FilterUsers = ({dispatch}) => {
  return <input type="text" name="filterName" onChange={(e) => {
    dispatch(setFilter(e.target.value))
  }} />
}

export default connect()(FilterUsers)
