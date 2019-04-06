import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

import { handleResponse } from '../helper/index';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    checkToken,
    checkTutorToken,
    checkParentToken,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
    const data = {
        email: email,
        password: password
    };
    return axios.post('/api/user/login', data)
        .then(handleResponse)
        .then(function (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function checkToken() {
    return axios.get('/api/user/checkToken');
}

function checkTutorToken() {
    return axios.get('/api/user/checkTutorToken');
}

function checkParentToken() {
    return axios.get('/api/user/checkParentToken');
}