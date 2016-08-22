import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';
import configureStore from './store/configureStore';

const { store, history } = configureStore(hashHistory);
//import App from './App';

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app'));
