import { call, put, takeEvery } from 'redux-saga/effects'

function* createNewReview(action){
    console.log('CreateReviewSaga=', action);
    try {
        const res = yield call(fetch, '/api/reviews',
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
        //alert(e.message);
        console.debug(e.message);
        yield put({type: "onFailureCreateReview", message:(e.message)});
    }
}

function* CreateReviewSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("createReviewEvent", createNewReview);// need to change after fix
}

export default CreateReviewSaga;
