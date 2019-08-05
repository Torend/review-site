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
import ViewUserReducer from "./components/ViewUser/reducer";
import RestaurantReducer from "./components/Restaurant/reducer";
import ViewUserReviewsReducer from "./components/ViewUserReviews/reducer";


export default combineReducers({
  app: AppReducer,
  gallery: GalleryReducer,
  signUp: SignUpReducer,
  signIn: SignInReducer,
  viewRestaurant: ViewRestaurantReducer,
  createRestaurant: CreateRestaurantReducer,
  createReview: CreateReviewReducer,
  searchUsers: SearchUsersReducer,
  viewProfile: ViewProfileReducer,
  viewUser: ViewUserReducer,
  restaurant: RestaurantReducer,
  viewUserReviews: ViewUserReviewsReducer
});
