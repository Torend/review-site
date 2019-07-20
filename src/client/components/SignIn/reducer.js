import initialState from '../../initialState'
import {SignInActionsConstants} from "./constants";
import {List} from "immutable";

const SignInReducer = (state = initialState.signIn, action) => {
    console.log('SignInReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onUsernameChange":
            return state.set('username', action.value);
        case "onLocationChange":
            return state.set('location', action.value);
        case "onPictureChange":
            return state.set('picture', URL.createObjectURL(action.value));
        case "onSubmit":
            state.set('username', action.username);
            state.set('location', action.location);
            state.set('picture', action.picture);
            console.log("onSubmit");
            return state;
        case "onSuccessReg":
            console.log("onSuccessReg");
            return state;
        case "onFailureReg":
            console.log("onFailureReg");
            return state;
        case "valid":
            console.log(action.value);
            return state;
        case "invalid":
            console.log("invalid");
            return state;
        case "loadLocationSuccess":
            let res = action.data.map(elm => {
                return {label: elm, value: elm }
            });
            return state.set('locations', new List(res));
        default:
            return state; // state is lost
    }
};

export default SignInReducer