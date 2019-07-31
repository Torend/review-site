import initialState from '../../initialState'

const RestaurantReducer = (state = initialState.restaurant, action) => {
    console.log('RestaurantReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onSuccessLoadRestaurantReviews":
            let lst =  state.get("restaurantReviews").push(action.value);
            state = state.set("restaurantReviews", lst);
            return state;
        default:
            return state; // state is lost
    }
};

export default RestaurantReducer
