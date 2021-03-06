import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import immutable from 'immutable';
import { ModeSwitch } from 'chayns-components';
import App from './components/App';
import rootReducer from './reducers';
import SERVER_URL from './constants/server-url';
import { loadData } from './actions/fetchData';

import fetchSites from './actions/fetchSites'; // TEST

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component then
 * and finally initializes the ModeSwitch.
 * @return {Promise.<void>}
 */
async function init() {
    console.debug('ServerUrl for current environment:', SERVER_URL);

    if (__DEV__ || __STAGING__) {
        const installDevTools = require('immutable-devtools');
        installDevTools(immutable);
    }

    const storeMiddleware = [thunk];

    if (__DEV__ || __STAGING__) {
        storeMiddleware.push(require('redux-logger').default);
    }

    //console.log(storeMiddleware);
    const store = createStore(
        rootReducer,
        applyMiddleware(...storeMiddleware)
    );

    await chayns.ready;

    const tappElement = document.querySelector('.tapp');
    ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>, tappElement);
}

init();
