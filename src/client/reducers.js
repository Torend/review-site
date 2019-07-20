import { combineReducers } from 'redux';
import GalleryReducer from './components/Gallery/reducer';
import AppReducer from './components/App/reducer';
import SignUpReducer from "./components/SignUp/reducer";
import SignInReducer from "./components/SignIn/reducer";


export default combineReducers({
  app: AppReducer,
  gallery: GalleryReducer,
  signUp: SignUpReducer,
  signIn: SignInReducer
});
