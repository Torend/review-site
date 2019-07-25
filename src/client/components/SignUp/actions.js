import {SignUpActionsConstants} from './constants.js';
//import {GalleryActionsConstants} from "../Gallery/constants";

function UpdateUsernameAction(username) {
    return {
        type: SignUpActionsConstants.UpdateUsernameAction,
        payload: {
            username
        }
    }
}


function Register(username, location, picture) {
    return {
        type: SignUpActionsConstants.REGISTRATION,
        uri: '/api/users',
        payload: {
            username,
            location,
            picture
        }
    }
}

let SignUpActions = {
    UpdateUsernameAction,
    Register
};

export default SignUpActions
