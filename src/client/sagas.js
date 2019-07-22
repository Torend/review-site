import { all } from 'redux-saga/effects'
import GallerySaga from './components/Gallery/saga'
import AppSaga from './components/App/saga'
import SignUpSaga from "./components/SignUp/saga";
import SignInSaga from "./components/SignIn/saga";

export default function* Sagas() {
    yield all([
        AppSaga(),
        GallerySaga(),
        SignUpSaga(),
        SignInSaga()
    ])
}
