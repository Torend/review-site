import initialState from '../../initialState'

const CreateRestaurantReducer = (state = initialState.createRestaurant, action) => {
    console.log('CreateRestaurantReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onRestaurantNameChange":
            return state.set('name', action.value);
        case "onDescriptionChange":
            return state.set('description', action.value);
        case "onPictureChange":
            return state.set('picture', URL.createObjectURL(action.value));
        case "onLocationChange":
            return state.set('location', action.value);
        default:
            return state; // state is lost
    }
};

export default CreateRestaurantReducer
