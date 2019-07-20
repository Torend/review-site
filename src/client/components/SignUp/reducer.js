import initialState from '../../initialState'
import {SignUpActionsConstants} from "./constants";
import {List} from "immutable";

const SignUpReducer = (state = initialState.signUp, action) => {
    console.log('SignUpReducerState=', state);
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
            alert("FLOOK");
            var count = Object.keys(elm).length;
            let li = new List();
            let res = action.data.map(elm => {
                return {label: elm.name, value: elm.name }
            });
            alert( new List(res));
            return state.set('locations', new List(res));
        default:
            return state; // state is lost
    }
};

export default SignUpReducer
