import { call, put, takeEvery } from 'redux-saga/effects'
import CreateReviewActions from "./acrions";
import CreateReviewConstants from "./constants";
function* CreateNewReview(action){
    console.log('CreateReviewSaga=', action);
    alert("VIA");
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
    } catch (e) {
        alert(e.message);
        console.debug(e.message);
        yield put({type: "onFailureReg", message:(e.message)});
    }
}

function* CreateReviewSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(CreateReviewConstants.CREATE_REVIEW, CreateNewReview);// need to change after fix
}

export default CreateReviewSaga;
