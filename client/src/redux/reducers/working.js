import isEmpty from 'lodash/isEmpty';
import {SET_CURRENT_WORK} from '../actions/types';

const initialState = {
    isWorking : 'home'
};

export default (state = initialState, action = {}) => {
    switch (action.type){
        case SET_CURRENT_WORK:
            return {
                isWorking : action.work
            }
        default:
            return state;
    }
};
