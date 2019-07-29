import {AppActionsConstants, SignInActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'


function* login(action){
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
        yield put({type: "onSuccessSignIn"});
    } catch (e) {
        //delete axios.defaults.headers.common['Authorization'];
        alert(e.message);
        console.debug(e.message);
        yield put({type: "onFailureRSignIn", message:(e.message)});
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



function* SignInSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(SignInActionsConstants.LOGIN, login);
    yield takeEvery("onUsernameChange", usernameChange);
}

export default SignInSaga;
