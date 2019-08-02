import { call, put, takeEvery } from 'redux-saga/effects'
import {ViewProfileActionsConstants} from './constants'

function* loadUser(action){
    console.log('ViewProfileSaga=', action);
    try {
        const res = yield call(fetch, '/api/users/get/'+ action.value,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadUser", value: json});
    } catch (e) {
        yield put({type: "onFailLoadUser", message:(e.message)});
    }
}


function* editProfile(action){
    console.log('ViewProfileSaga=', action);

    try {
        const res = yield call(fetch, '/api/users/update/'+ action.username,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: JSON.stringify({
                    username: action.value,
                }),
                body: JSON.stringify(action.payload)
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessUpdateUser", value: json});
    } catch (e) {
        yield put({type: "onFailUpdateUser", message:(e.message)});
    }
}

function* ViewProfileSaga() {

    yield takeEvery(ViewProfileActionsConstants.loadUserEvent, loadUser);
    yield takeEvery(ViewProfileActionsConstants.editProfileEvent, editProfile)
}

export default ViewProfileSaga;
