import { call, put, takeEvery } from 'redux-saga/effects'
import CreateReviewActions from "./acrions";
import {CreateReviewActionsConstants} from "./constants";

function* CreateNewReview(action){
    console.log('CreateReviewSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
        if (res.status === 400)
        {
            yield put({type: "onFailureCreateReview"});

        }
        if (res.status === 200)
        {
            const json = yield call([res, 'json']); //retrieve body of response
            yield put({type: "onSuccessCreateReview"});
        }



    } catch (e) {
        alert(e.message);
        console.debug(e.message);
        yield put({type: "onFailureCreateReview", message:(e.message)});
    }
}

function* CreateReviewSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(CreateReviewActionsConstants.CREATE_REVIEW, CreateNewReview);// need to change after fix
}

export default CreateReviewSaga;
