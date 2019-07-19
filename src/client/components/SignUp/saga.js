import {AppActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from './actions'

function* regUser(action){
    console.log('SignUpSaga=', action);
    try {
        const res = yield call(fetch, '/api/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: action.username,
                    location: action.location,
                    picture: action.picture
                })
            });

        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessReg"});
    } catch (e) {
        yield put({type: "onFailureReg", message:(e.message)});
    }
}

function* usernameChange(action){
    console.log('SignUpSaga=', action);
    console.log("------>", action.value);
    try {
        const res = yield call(fetch, '/api/users/username/:username',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: JSON.stringify({
                    username: action.value,
                })
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "valid", value: json});
    } catch (e) {
        yield put({type: "invalid", message:(e.message)});
    }
}

function* SignUpSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("onSubmit", regUser);
    yield takeEvery("onUsernameChange", usernameChange)
}

export default SignUpSaga;
