import React, { Component } from 'react';
import './App.css';
import CashOperations from './containers/cashOperations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CashOperations />
      </div>
    );
  }
}

export default App;
