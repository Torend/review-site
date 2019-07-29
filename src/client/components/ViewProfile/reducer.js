import {List} from "immutable";
import initialState from "../../initialState";


const ViewProfileReducer = (state = initialState.viewProfile, action) => {
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
        case "onUsernameChange":
            return state.set('username', action.value);
        case "onLocationChange":
            return state.set('location', action.value);
        default:
            return state; // state is lost
    }
};

export default ViewProfileReducer
