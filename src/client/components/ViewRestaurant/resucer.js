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
        default:
            return state; // state is lost
    }
};

export default ViewRestaurantReducer
