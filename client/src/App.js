import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/rootReducer';
import setLoginToken from './utils/setLoginToken';
import jwt from 'jsonwebtoken';
import {setCurrentUser} from './redux/actions/login';
import config from './config/defaults.json';

import IndexPage from './components/indexpage';
import WebApp from './components/webapp';
import Login from './components/login';



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        // eslint-disable-next-line
        window.devToolsExtension ? window.devToolsExtension() : f = f
    )
);

/* global localStorage*/
if(localStorage.getItem(config.localStorageLogin)){
    setLoginToken(localStorage.getItem(config.localStorageLogin));
    store.dispatch(setCurrentUser(jwt.decode(localStorage.getItem(config.localStorageLogin))));
}

const App = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path ="/" component={IndexPage} />
                <Route exact path ="/app" component={WebApp} />
                <Route exact path="/login" component={Login} />
            </div>
        </BrowserRouter>
    </Provider>
)

export default App;
