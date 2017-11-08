import { combineReducers } from 'redux';
import login from './reducers/login';
import working from './reducers/working';

export default combineReducers({
    working,
    login
});
