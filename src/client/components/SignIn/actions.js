import {SignInActionsConstants} from './constants.js';
//import {GalleryActionsConstants} from "../Gallery/constants";

function UpdateUsernameAction(username) {
    return {
        type: SignInActionsConstants.UpdateUsernameAction,
        payload: {
            username
        }
    }
}


function Login(username) {
    return {
        type: SignInActionsConstants.LOGIN,
        uri: '/api/users/authenticate',
        payload: {
            username
        }
    }
}

let SignInActions = {
    UpdateUsernameAction,
    Login
};

export default SignInActions
