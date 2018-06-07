import React, { Component } from 'react';
import MemberList from './MemberList'
import ColorList from './ColorList'
import HiddenMessages from './HiddenMessages'
import CountryList from './CountryList'
import data from './data'
import TimelineD3 from './TimelineD3'
import DataComponent from './DataComponent'
import PeopleList from './PeopleList'

import logo from './logo.svg';
import './App.css';

const RandomMeUsers = DataComponent(
  PeopleList,
  'https://randomuser.me/api/?nat=US&results=30'
)

const CountryNames = ({data, selected=""}) =>
  <select defaultValue={selected}>
    {data.map((item, i) =>
      <option key={i} value={item.name}>{item.name}</option>
    )}
  </select>

const CountryDropDown = 
    DataComponent(
      CountryNames,
      "https://restcountries.eu/rest/v1/all"
    )

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <CountryDropDown selected="United States" />
          <RandomMeUsers />
          <hr />
          <TimelineD3 data={data.historicDatesForSkiing} name="History of Skiing"/>
          <hr />
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
