import { call, put, takeEvery } from 'redux-saga/effects'

function* createNewRestaurant(action){
    console.log('CreateRestaurantSaga=', action);
    console.log(action.payload);
    try {
        //alert(JSON.stringify(action.payload));
        const res = yield call(fetch, '/api/restaurants',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessCreateRestaurant"});
    } catch (e) {
        yield put({type: "onFailureCreateRestaurant", message:(e.message)});
    }
}

function* CreateRestaurantSaga() {
    yield takeEvery("aaa", createNewRestaurant);
}

export default CreateRestaurantSaga;
