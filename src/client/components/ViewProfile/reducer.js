//import initialState from '../../initialState'
import {List} from "immutable";

const initialState = {
    username: '',
    location: '',
    picture: null
};

const ViewProfileReducer = (state = initialState, action) => {
    console.log('ViewProfileReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onSuccessLoadUser":
            console.log("onSuccessReg");
            console.log(action.value);
            state = state.set("username",action.value.username);
            state = state.set("username",action.value.location);
            return state = state.set("username",action.value.picture);
        case "onFailLoadUser":
            console.log("onFailureReg");
            return state;
        default:
            return state; // state is lost
    }
};

export default ViewProfileReducer
