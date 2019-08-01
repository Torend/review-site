import { call, put, takeEvery } from 'redux-saga/effects'


function* loadThisUserReviews(action){
    console.log('ViewUserReviewsSaga=', action);

    try {
        const res = yield call(fetch, '/api/reviews/byuser/'+action.value,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadThisUserReviews", value: json});
    } catch (e) {
        yield put({type: "onFailureLoadThisUserReviews", message:(e.message)});
    }
}

function* deleteReview(action){
    console.log('ViewUserReviewsSaga=', action);
    console.log("YESSSSSS", action.value);
    try {
        const res = yield call(fetch, '/api/reviews/'+action.value,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadThisUserReviews", value: json});
    } catch (e) {
        yield put({type: "onFailureLoadThisUserReviews", message:(e.message)});
    }
}

function* ViewUserReviewsSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("loadThisUserReviewsEvent", loadThisUserReviews);
    yield takeEvery("deleteReviewEvent", deleteReview);
}

export default ViewUserReviewsSaga;
