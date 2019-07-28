import { combineReducers } from 'redux';
import GalleryReducer from './components/Gallery/reducer';
import AppReducer from './components/App/reducer';
import SignUpReducer from "./components/SignUp/reducer";
import SignInReducer from "./components/SignIn/reducer";
import ViewRestaurantReducer from "./components/ViewRestaurant/reducer";
import CreateRestaurantReducer from "./components/CreateRestaurant/reducer";
import CreateReviewReducer from "./components/CreateReview/reducer";
import SearchUsersReducer from "./components/SearchUsers/reducer";
import ViewProfileReducer from "./components/ViewProfile/reducer";


export default combineReducers({
  app: AppReducer,
  gallery: GalleryReducer,
  signUp: SignUpReducer,
  signIn: SignInReducer,
  viewRestaurant: ViewRestaurantReducer,
  CreateRestaurant: CreateRestaurantReducer,
  CreateReview: CreateReviewReducer,
  SearchUsers: SearchUsersReducer,
  ViewProfile: ViewProfileReducer
});
