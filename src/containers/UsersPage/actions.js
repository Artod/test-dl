export const userCreate = (name) => {
  return {
    type: 'CREATE',
    name
  }
}

export const requestUsers = () => {
  return {
    type: 'REQUEST'
  }
}

export const reciveUsers = (users) => {
  return {
    type: 'RETRIVE',
    users
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET',
    filter
  }
}

export const changeSort = (sort) => {
  return {
    type: 'CHANGE_SORT',
    sort
  }
}

export const delUser = (id) => {
  return {
    type: 'DELETE',
    id
  }
}
export const changeUser = (id, newFields) => {
  return {
    type: 'UPDATE',
    id,
    newFields
  }
}



export const fetchUsers = () => dispatch => {
  dispatch(requestUsers())

  return fetch('https://testdl-fb.firebaseio.com/users.json')
    .then(response => response.json() )
    .then(users => { dispatch(reciveUsers(users)) })
}
