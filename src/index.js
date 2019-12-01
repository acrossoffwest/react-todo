import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let reducer = (state = {}, data = {}) => {
    let newState = Object.assign(state, data);
    return newState;
}

let store = createStore(reducer, {
    tasks: [
        {title: 'Do haircut', content: 'Top content', status: 'ready'},
        {title: 'Cut', content: 'Top content', status: 'process'},
        {title: 'Wake up', content: 'Top content', status: 'new'}
    ]
});

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
