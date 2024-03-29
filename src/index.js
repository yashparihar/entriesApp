import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';

import store from './store.js';
import { Provider } from 'react-redux';

import AppContainer from './container/AppContainer'
import * as serviceWorker from './serviceWorker';


store.subscribe(() => {
    console.log(store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
