import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { v4 } from 'uuid'
import PhoneBook from './components/PhoneBook'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts || []
    }

    this.addNumber = this.addNumber.bind(this);
    this.deleteNumber = this.deleteNumber.bind(this);
  }
  addNumber(name, phone, color) {
    const contacts = [
      ...this.state.contacts,
      {
          name,
          phone,
          color,
          'rating': '0',
          'id': v4()
      }
    ]
    this.setState({contacts})
  }
  deleteNumber(id) {
    const contacts = this.state.contacts.filter((contact) => contact['id'] !== id);
    this.setState({contacts})
  }
  render() {
    const {addNumber, deleteNumber} = this;
    const {contacts} = this.state;
    return (
      <section>
        <PhoneBook deleteNumber={deleteNumber} addNumber={addNumber} contacts={contacts}/>
      </section>
    )
  }
}

App.propTypes = {
  contacts: PropTypes.array
}

App.defaultProps = {
  contacts: []
}
