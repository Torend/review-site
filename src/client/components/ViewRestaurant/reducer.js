import initialState from '../../initialState'
import {List} from "immutable";

const ViewRestaurantReducer = (state = initialState.viewRestaurant, action) => {
    console.log('ViewRestaurantReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "loadRestaurantSuccess":
            let res = action.data.map(elm => {
                return {label: elm, value: elm}
            });
            return state.set('restaurants', new List(res));
        case "sortByScore":
            if (state.get("sort") !== "sortByScore") {
                let restaurantsByScore = state.get("restaurants").sort(function (a, b) {
                    return (averageReviews(a)) - (averageReviews(b))
                });
                state = state.set("sort", "sortByScore");
                return state = state.set("restaurants", restaurantsByScore);
            } else return state = state.set("restaurants", state.get("restaurants").reverse());
        case "sortByDate":
            if (state.get("sort") !== "sortByDate") {
                let restaurantsByDate = state.get("restaurants").sort(function (a, b) {
                    a = a.date.split('.').reverse().join('');
                    b = b.date.split('.').reverse().join('');
                    return a > b ? 1 : a < b ? -1 : 0;
                });
                state = state.set("sort", "sortByDate");
                return state = state.set("restaurants", restaurantsByDate);
            } else return state = state.set("restaurants", state.get("restaurants").reverse());
        default:
            return state; // state is lost
    }
};

function averageReviews(restaurant) {
    let numOfReview = restaurant.reviews.length;
    return (restaurant.reviews.map((rev) => {
        return rev.average
    }).reduce((a, b) => a + b, 0)) / numOfReview;
}

export default ViewRestaurantReducer
