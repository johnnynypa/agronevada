import axios from 'axios';
import setLoginToken from '../../utils/setLoginToken';
import {SET_CURRENT_USER} from './types';
import config from '../../config/defaults.json';
import jwt from 'jsonwebtoken';

export function logout(){
    return dispatch =>{
        /*global localStorage */
        localStorage.removeItem(config.localStorageLogin);
        setLoginToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    }
}

/* @userData is a Object JSON, his fields are 'username' and 'password' */
export function loginRequest(userData){
    return dispatch => {
        return axios.post(config.api+'/login', userData)
        .then(res =>{
            return new Promise((resolve, eject) => {
                const token = res.data.token;
                localStorage.setItem(config.localStorageLogin, token);
                setLoginToken(token);
                dispatch(setCurrentUser(jwt.decode(token)));
                resolve(res);
            });
        } );
    };
}

export function loginVerify(){
    return dispatch => {
        console.log(localStorage.getItem(config.localStorageLogin));
    }
}
