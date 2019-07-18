import {AppActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from './actions'

function* regUser(action){
    console.log('AppSaga=', action);
    try {
        const res = yield call(fetch, '/api/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessReg"});
    } catch (e) {
        yield put({type: "onFailureReg", message:(e.message)});
    }
}

function* SignUpSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("onSubmit", regUser);
}

export default SignUpSaga;
