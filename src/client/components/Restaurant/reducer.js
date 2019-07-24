import initialState from '../../initialState'

const RestaurantReducer = (state , action) => {
    console.log('RestaurantReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "sortReviewsByScore":
            console.log("good");
    }
    return state;
};

export default RestaurantReducer
