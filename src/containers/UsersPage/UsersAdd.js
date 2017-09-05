import React, {Component} from 'react'
import {connect} from 'react-redux'
import { userCreate } from './actions'

const UsersAdd = ({dispatch}) => {
  let inputName = null

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if (!inputName.value.trim()) return
        dispatch(userCreate(inputName.value))
      }}>
      <input ref={input => inputName = input} type="text" name="name" />
      <button>Add</button>
    </form>
  )
}

export default connect()(UsersAdd)
