import {SignInActionsConstants} from './constants.js';
//import {GalleryActionsConstants} from "../Gallery/constants";
function SignIn(username) {
    return {
        type: SignInActionsConstants.SIGN_IN,
        uri: '/api/users',
        payload: {
            username
        }
    }
}

let SignInActions = {
    SignIn
};

export default SignInActions
