import {AppActionsConstants, SearchUsersActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'


function* searchUsers(action){
    console.log('SearchUsersSaga=', action);
    try {
        const res = yield call(fetch, '/api/users',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadUsers", value: json});
    } catch (e) {
        yield put({type: "onFailureLoadUsers", message:(e.message)});
    }
}


function* SearchUsersSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("loadUsers", searchUsers);
}

export default SearchUsersSaga;
