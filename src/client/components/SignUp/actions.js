import {SignUpActionsConstants} from './constants.js';

function UpdateUsernameAction(username) {
    return {
        type: SignUpActionsConstants.UpdateUsernameAction,
        payload: {
            username
        }
    }
}


let SignUpActions = {
    UpdateUsernameAction
};

export default SignUpActions
