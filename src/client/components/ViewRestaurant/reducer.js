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
        case "sortByLocation":
            if (state.get("sort") !== "sortByLocation") {
                let currLocation = localStorage.getItem('location');
                let restaurantsByScore = state.get("restaurants").sort(function (a, b) {
                    return (distance(a.location, currLocation)) - (distance(b.location, currLocation))
                });
                state = state.set("sort", "sortByLocation");
                return state = state.set("restaurants", restaurantsByScore);
            } else return state = state.set("restaurants", state.get("restaurants").reverse());
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
    console.log(initialState.restaurant.get("restaurantReviews"));
    let numOfReview = restaurant.reviews.length;
    return (restaurant.reviews.map((rev) => {
        return Review.average
    }).reduce((a, b) => a + b, 0)) / numOfReview;
}

function distance(location, currLocation) {
    const cities = new Map([
        ["New York", [40.785091, -73.968285]],
        ["Rome", [41.890251, 12.492373]],
        ["London", [51.509865, -0.118092]],
        ["Istanbul", [ 41.015137, 28.979530]],
        ["Paris", [48.864716, 2.349014]],
        ["Tel Aviv", [32.109333, 34.855499]],
        ["BeerSheva", [31.25181, 34.7913]],
        ["RamtGan", [32.08227, 34.81065]]
    ]);

    let city1 = cities.get(location);
    let city2 = cities.get(currLocation);
    let a = city1[0] - city2[0];
    let b = city1[1] - city2[1];
    return Math.sqrt( a*a + b*b );
}

export default ViewRestaurantReducer
