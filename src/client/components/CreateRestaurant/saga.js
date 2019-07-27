import { call, put, takeEvery } from 'redux-saga/effects'
import CreateRestaurantActions from "./actions";


function* createRestaurant(action){
    console.log('CreateRestaurantSaga=', action);
    console.log(action.payload);
    try {
        //alert(JSON.stringify(action.payload));
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "onSuccessRestaurantReg"});
    } catch (e) {
        //alert(e.message);
        console.debug(e.message);
        yield put({type: "onFailureRestaurantReg", message:(e.message)});
    }
}

function* loadLocations(action){
    console.log('CreateRestaurantSaga=', action);
    try {
        const res = yield call(fetch, '/api/locations',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "loadLocationSuccess", data: json});
    } catch (e) {
        yield put({type: "invalid", message:(e.message)});
    }
}


function* CreateRestaurantSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("CreateNewRestaurant", createRestaurant);
    //yield takeEvery("LoadLocations", loadLocations);
}

export default CreateRestaurantSaga;
