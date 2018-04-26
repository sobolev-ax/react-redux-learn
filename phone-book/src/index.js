import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contacts from './data/contacts'

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
