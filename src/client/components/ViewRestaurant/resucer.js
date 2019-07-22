import initialState from '../../initialState'
import {List} from "immutable";

const ViewRestaurantReducer = (state = initialState.viewRestaurant, action) => {
    console.log('ViewRestaurantReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "loadRestaurantSuccess":
            let res = action.data.map(elm => {
                return {label: elm, value: elm }
            });
            return state.set('restaurants', new List(res));
        case "sortByScore":
            let restaurants = state.get("restaurants").sort(function(a, b) {
                return (averageReviews(a)) - (averageReviews(b))});
            state = state.set("restaurants", restaurants);
        default:
            return state; // state is lost
    }
};
function averageReviews(restaurant) {
    let numOfReview = restaurant.reviews.length;
    return (restaurant.reviews.map((rev)=>{return rev.average}).reduce((a, b) => a + b, 0))/numOfReview;
}
export default ViewRestaurantReducer
