const users = (state = {isLoading: false, sort: 'name', items: []}, action) => {
  switch(action.type) {
    case 'CREATE':
      return {
        ...state,
        items: [
          ...state.items, {
            id: (new Date()).getMilliseconds(),
            name: action.name,
            active: true
          }
      ]}
    case 'REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'RETRIVE':
      return {
        ...state,
        isLoading: false,
        items: action.users
      }
    case 'UPDATE':
      var  index = state.items.findIndex((user) => {
        return user.id === action.id
      })

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            ...action.newFields
          },
          ...state.items.slice(index+1)
        ]
      }
    case 'DELETE':
      var index = state.items.findIndex((user) => {
        return user.id === action.id
      })

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index+1)
        ]
      }
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: action.sort
      }
    default:
      return state
  }
}

const filterName = (state = '', action) => {
  switch(action.type) {
    case 'SET':
      return action.filter
    default:
      return state
  }
}

export {users, filterName}
