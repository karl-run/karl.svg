import React from 'react';
import ReactDOM from 'react-dom';

import Normal from './karl/normal';
import Animated from './karl/animated';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>karl.getMovin(true);</h1>
      <Animated />
      <Normal />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
