import {AppActionsConstants, SearchUsersActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from './actions'
import axios from 'axios';


function* searchUsers(action){ //todo: change to fit search users
    console.log('SignInSaga=', action);
    alert(action.uri);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
        const json = yield call([res, 'json']); //retrieve body of response
        localStorage.setItem('username', json.username);
        //const { token } = res.data;
        //localStorage.setItem('jwtToken', token);
        //axios.defaults.headers.common['Authorization'] = token;
        yield put({type: "onSuccessReg"});
    } catch (e) {
        //delete axios.defaults.headers.common['Authorization'];
        alert(e.message);
        console.debug(e.message);
        yield put({type: "onFailureReg", message:(e.message)});
    }
}


function* SearchUsersSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(SearchUsersActionsConstants.SEARCH, searchUsers);
}

export default SearchUsersSaga;
