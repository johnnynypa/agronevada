import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/rootReducer';

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
