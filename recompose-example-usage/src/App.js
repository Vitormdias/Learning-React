import React, { Component } from 'react';
import './App.css';
// import { UserDetail, WrappedUserDetail } from './components/withPropsExample'
import { CounterFromObservable } from './components/counterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <UserDetail name='João' age={18} />
          <WrappedUserDetail></WrappedUserDetail> */}
          <CounterFromObservable />
        </header>
      </div>
    );
  }
}

export default App;
