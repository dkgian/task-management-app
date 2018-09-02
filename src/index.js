import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './reducers/index';

const appStore = createStore(appReducer)

ReactDOM.render(
    <Provider store={ appStore }>
        <App/>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
