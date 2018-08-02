import React, { Component } from 'react';

import Normal, { Animated } from 'karl.svg';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>karl.getMovin(true);</h1>

        <div className="svg-container">
          <Animated />
          <Normal />
        </div>
      </div>
    );
  }
}
