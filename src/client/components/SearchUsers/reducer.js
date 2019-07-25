import initialState from '../../initialState'
import {SearchUsersActionsConstants} from "./constants";
import {List} from "immutable";

const SearchUsersReducer = (state = initialState.signIn, action) => {
    console.log('SearchUsersReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onUsernameChange":
            return state.set('username', action.value);
        case "onSubmit":
            state.set('username', action.username);
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
        default:
            return state; // state is lost
    }
};

export default SignInReducer
