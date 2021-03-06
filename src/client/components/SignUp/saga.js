import {AppActionsConstants, SignUpActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from './actions'
import {history} from "../history-helper"

function* regUser(action){
    console.log('SignUpSaga=', action);
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
        yield put({type: "onSuccessReg"});
        history.push("/signIn");
    } catch (e) {
        console.debug(e.message);
        yield put({type: "onFailureReg", message:(e.message)});
    }
}

function* usernameChange(action){
    console.log('SignUpSaga=', action);
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
    yield takeEvery(SignUpActionsConstants.REGISTRATION, regUser);
    yield takeEvery("onUsernameChange", usernameChange);
}

export default SignUpSaga;
