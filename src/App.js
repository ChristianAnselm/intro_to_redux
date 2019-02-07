import React, { Component } from 'react';
import RandomColor from './randomColor';
import FruitsIndexContainer from './components/fruitsIndexContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello everyone I am super cool and love making react stuff!
        <br />
        <br />
        <FruitsIndexContainer />
      </div>
    );
  }
}

export default RandomColor(App);
