import initialState from '../../initialState'
import {List} from "immutable";

const ViewRestaurantReducer = (state = initialState.viewRestaurant, action) => {
    console.log('ViewRestaurantReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "loadRestaurantSuccess":
            state = state.set("backup", List(action.data));
            return state.set('restaurants', List(action.data));
        // case "loadLocationsSuccess":
        //     let loc = action.data.map(elm => {
        //         return {label: elm, value: elm}
        //     });
        //     return state.set('locations', new List(loc));
        case "filterByLocation":
            if(action.value === '')
                return state = state.set("restaurants", state.get("backup"));
            state.set('searchLocationValue', action.value);
            return state = state.set("restaurants", state.get("backup").filter((restaurant) => {
                return restaurant.location === action.value;
            }));
        case "sortByScore":
            if (state.get("sort") !== "sortByScore") {
                let restaurantsByScore = state.get("restaurants").sort(function (a, b) {
                    return (averageReviews(a)) - (averageReviews(b))
                });
                state = state.set("sort", "sortByScore");
                return state = state.set("restaurants", restaurantsByScore);
            } else return state = state.set("restaurants", state.get("restaurants").reverse());
        case "filterByName":
            state.set('searchValue', action.value);
            let len = action.value.length;
            return state = state.set("restaurants", state.get("backup").filter((restaurant) => {
                return restaurant.name.substring(0, len) === action.value;
            }));
        //review case
        // case "sortReviewByDate":
        // if (state.get("sort") !== "sortByDate") {
        //     console.log(state.get("restaurants").reviews);
        //     let reviewByDate = state.get("restaurants").reviews.sort(function (a, b) {
        //         a = a.date.split('.').reverse().join('');
        //         b = b.date.split('.').reverse().join('');
        //         return a > b ? 1 : a < b ? -1 : 0;
        //     });
        //     state = state.set("sort", "sortByDate");
        //     return state = state.set("restaurants", restaurantsByDate);
        // } else return state = state.set("restaurants", state.get("restaurants").reverse());
        // case "sortReviewsByScore":

        default:
            return state; // state is lost
    }
};


function averageReviews(restaurant) {
    let numOfReview = restaurant.reviews.length;
    return (restaurant.reviews.map((rev) => {
        return Review.average
    }).reduce((a, b) => a + b, 0)) / numOfReview;
}

export default ViewRestaurantReducer
