import initialState from '../../initialState'
import {SignInActionsConstants} from "./constants"; //TODO: FIX, why no usage?
import {List} from "immutable";

const SignInReducer = (state = initialState.signIn, action) => {
    console.log('SignInReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onUsernameChange":
            return state.set('username', action.value);
        case "onSubmit":
            state.set('username', action.username);
            return state;
        case "onSuccessSignIn":
            return state;
        default:
            return state; // state is lost
    }
};

export default SignInReducer
