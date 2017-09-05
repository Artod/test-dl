import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux'

import HomePage from '../HomePage'
import UsersPage from '../UsersPage'
import UserProfile from '../UserProfile'
import SignInPage from '../SignInPage'
// import UserProfile from '../UserProfile'

import Menu from './Menu'

import stl from './index.css'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <section className="App">
            <header className={stl.header}>
              <h2>Test App DL</h2>
            </header>

            <Menu />
            
            <section className={stl.main}>
              <Route exact path="/" component={HomePage} />
              <Route path="/users" component={UsersPage} >
                <Route path="profile(/:id)" component={UserProfile} />
              </Route>
              <Route path="/sign-in" component={SignInPage} />
            </section>

          </section>
        </Router>
      </Provider>
    )
  }
}

export default App
