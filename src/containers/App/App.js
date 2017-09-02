import React, { Component } from 'react';
// import logo from './logo.svg';
import stl from './App.css';

class App extends Component {


  componentWillMount() {
    console.log(stl.App)
  }

  render() {
    return (
      <div className="App">
        <div className="{stl.App-header}">
          <h1>Test App Domium Link</h1>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
