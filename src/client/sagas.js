import { all } from 'redux-saga/effects'
import GallerySaga from './components/Gallery/saga'
import AppSaga from './components/App/saga'
import SignUpSaga from "./components/SignUp/saga";
import CreateReviewSaga from "./components/CreateReview/saga";
import ViewRestaurantSaga from "./components/ViewRestaurant/saga";
import ViewProfileSaga from "./components/ViewProfile/saga";
import SearchUsersSaga from "./components/SearchUsers/saga";
import ViewUserSaga from "./components/ViewUser/saga";
import RestaurantSaga from "./components/Restaurant/saga";
import CreateRestaurantSaga from "./components/CreateRestaurant/saga";
import ViewUserReviewsSaga from "./components/ViewUserReviews/saga";
import SignInSaga from "./components/SignIn/saga";

export default function* Sagas() {
    yield all([
        AppSaga(),
        GallerySaga(),
        SignInSaga(),
        SignUpSaga(),
        ViewRestaurantSaga(),
        CreateRestaurantSaga(),
        CreateReviewSaga(),
        ViewProfileSaga(),
        SearchUsersSaga(),
        ViewUserSaga(),
        RestaurantSaga(),
        ViewUserReviewsSaga()
    ])
}
