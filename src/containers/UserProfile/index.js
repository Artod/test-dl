import React, {Component} from 'react'

// import stl from './index.css'

class UserProfile extends Component {
  render() {
    return (
      <section>
        <h2>User Profile</h2>
        {this.props.match.url}
      </section>
    )
  }
}

export default UserProfile
