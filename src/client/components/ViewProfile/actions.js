import {ViewProfileActionsConstants} from './constants.js';
//import {GalleryActionsConstants} from "../Gallery/constants";

function UpdateUsernameAction(username) {
    return {
        type: SignUpActionsConstants.UpdateUsernameAction,
        payload: {
            username
        }
    }
}


function EditProfile(username, to_username, location) {
    return {
        type: ViewProfileActionsConstants.editProfileEvent,
        uri: '/api/users/update',
        payload: {
            username,
            to_username,
            location
        }
    }
}

let ViewProfileActions = {
    UpdateUsernameAction,
    EditProfile
};

export default ViewProfileActions
