import React from 'react'
import ReactDOM from 'react-dom'
// import {createStore, combineReducers} from 'redux'
import registerServiceWorker from './registerServiceWorker'

import {store} from './store'

import App from './containers/App'

import './index.css'

ReactDOM.render(<App store={store}/>, document.getElementById('root'))

registerServiceWorker()
