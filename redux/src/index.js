import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state'

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'INCREASE_COUNTER'
});
store.dispatch({
    type: 'INCREASE_COUNTER'
});
store.dispatch({
    type: 'RESET_COUNTER'
});
store.dispatch({
    type: 'UNKNOWN'
});
