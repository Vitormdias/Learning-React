import React, { Component } from 'react';
import './App.css';
import SuspenseWithCache from './components/SuspenseWithCache';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Counter></Counter> */}
          {/* <CounterWithStorageEffect /> */}
          <SuspenseWithCache></SuspenseWithCache>
        </header>
      </div>
    );
  }
}

export default App;
