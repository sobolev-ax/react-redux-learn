import React, { Component } from 'react';
import MemberList from './MemberList'
import ColorList from './ColorList'
import HiddenMessages from './HiddenMessages'
import CountryList from './CountryList'
import data from './data'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <CountryList />
          <hr />
          <HiddenMessages />
          <hr />
          <ColorList colors={data.colors}/>
          <MemberList count={5}/>
        </main>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
