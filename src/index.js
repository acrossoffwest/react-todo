import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ADD_TASK, UPDATE_TASK } from "./store/actionTypes";

let reducer = (state = {}, data = {}) => {
    console.log(data.payload)
    switch(data.type) {
        case ADD_TASK:
            state.tasks.push(data.payload);
            break;
        case UPDATE_TASK:
            state.tasks[data.index] = data.payload;
            break;
    }
    return state;
}

let store = createStore(reducer, {
    tasks: [
        {
            title: 'Do haircut',
            content: 'Top content',
            status: 'ready',
        }
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
