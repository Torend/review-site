import initialState from '../../initialState'
import {List} from "immutable";

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
        case "loadLocationSuccess":
            let res = action.data.map(elm => {
                return {label: elm, value: elm }
            });
            return state.set('locations', new List(res));
        case "onSubmit":
            state.set('name', action.name);
            state.set('description', action.description);
            state.set('location', action.location);
            state.set('picture', action.picture);
            console.log("onSubmit");
            return state;
        default:
            return state; // state is lost
    }
};

export default CreateRestaurantReducer
