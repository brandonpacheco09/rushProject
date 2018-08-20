import React, {PropTypes, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
