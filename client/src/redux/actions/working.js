import {SET_CURRENT_WORK} from './types';

export function changedWork(route){
    return dispatch => {
        dispatch(setCurrentWork(route))
    }
}

export function setCurrentWork(route){
    return {
        type : SET_CURRENT_WORK,
        work : route
    }
}