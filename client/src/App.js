import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/rootReducer';
import setLoginToken from './utils/setLoginToken';
import jwt from 'jsonwebtoken';
import {setCurrentUser, logout} from './redux/actions/login';
import config from './config/defaults.json';

import IndexPage from './components/indexpage';
import WebApp from './components/webapp';
import Login from './components/login';



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
        // eslint-disable-next-line
        // window.devToolsExtension ? window.devToolsExtension() : f = f
    )
);

/* global localStorage*/
const tokenHashed = localStorage.getItem(config.localStorageLogin);
if(tokenHashed){
    const token = jwt.decode(tokenHashed);
    setLoginToken(tokenHashed);
    store.dispatch(setCurrentUser(token));
}

setInterval( ()=>{
    const tokenHashed = localStorage.getItem(config.localStorageLogin);
    if(!tokenHashed){
        store.dispatch(logout());
    }
}, 10000);

const App =(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path ="/" component={IndexPage} />
                <Route exact path ="/app" component={WebApp} />
                <Route exact path ="/login" component={Login} />
            </div>
        </BrowserRouter>
    </Provider>
)

export default App;
