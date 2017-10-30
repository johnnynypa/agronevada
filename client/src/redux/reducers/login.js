import isEmpty from 'lodash/isEmpty';
import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
    isLogin : false,
    user : {}
};

export default (state = initialState, action = {}) => {
    switch (action.type){
        case SET_CURRENT_USER:
            return {
                isLogin : !isEmpty(action.user),
                user: action.user
            }
        default:
            return state;
    }
};
