import { call, put, takeEvery } from 'redux-saga/effects'
import RestaurantReducer from "./reducer";


function* loadRestaurantReviews(action){
    console.log('RestaurantSaga=', action);

    try {
        const res = yield call(fetch, '/api/reviews/byres/'+action.value,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessLoadRestaurantReviews", value: json});
    } catch (e) {
        yield put({type: "onFailureLoadRestaurantReviews", message:(e.message)});
    }
}


function* RestaurantSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("loadRestaurantReviewsEvent", loadRestaurantReviews);
}

export default RestaurantSaga;
