import { call, put, takeEvery } from 'redux-saga/effects'

function* loadRestaurant(action){
    console.log('ViewRestaurantSaga=', action);
    try {
        const res = yield call(fetch, '/api/users/restaurants',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        yield put({type: "loadRestaurantSuccess", data: json});
    } catch (e) {
        yield put({type: "loadRestaurantFail", message:(e.message)});
    }
}
//
// function* LoadLocations(action){
//     console.log('ViewRestaurantSaga=', action);
//     try {
//         const res = yield call(fetch, '/api/locations',
//             {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//             });
//
//         const json = yield call([res, 'json']); //retrieve body of response
//         yield put({type: "loadLocationsSuccess", data: json});
//     } catch (e) {
//         yield put({type: "loadLocationsFail", message:(e.message)});
//     }
// }


function* ViewRestaurantSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery("loadRestaurantEvent", loadRestaurant);
    //yield takeEvery("LoadLocationsEvent", LoadLocations);
}

export default ViewRestaurantSaga;
