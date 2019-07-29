import { call, put, takeEvery } from 'redux-saga/effects'


function* loadUser(action){
    console.log('ViewProfileSaga=', action);
    try {
        const res = yield call(fetch, '/api/users/get/:username',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: JSON.stringify({
                    username: action.value.target,
                })
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadUser", value: json});
    } catch (e) {
        yield put({type: "onFailLoadUser", message:(e.message)});
    }
}


function* ViewProfileSaga() {

    yield takeEvery("loadUserEvent", loadUser);
}

export default ViewProfileSaga;
