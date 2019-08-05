import { call, put, takeEvery } from 'redux-saga/effects'


function* loadUserReviews(action){
    console.log('ViewUserSaga=', action);

    try {
        const res = yield call(fetch, '/api/reviews/byuser/'+action.value,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadUserReviews", value: json});
    } catch (e) {
        yield put({type: "onFailureLoadUserReviews", message:(e.message)});
    }
}


function* ViewUserSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("loadUserReviewsEvent", loadUserReviews);
}

export default ViewUserSaga;
