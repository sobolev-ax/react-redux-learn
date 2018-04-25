import React, { Component } from 'react';
import { v4 } from 'uuid' // id: v4()
import AddPhoneNumber from './components/AddPhoneNumber'

export default class App extends Component {
  render() {
    return (
      <section>
        <h1>Phone book</h1>
        <AddPhoneNumber />
      </section>
    )
  }
}
