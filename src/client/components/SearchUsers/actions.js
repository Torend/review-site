import {SearchUsersActionsConstants} from './constants.js';
//import {GalleryActionsConstants} from "../Gallery/constants";



function SearchUsers(username) {
    return {
        type: SearchUsersActionsConstants.SEARCH,
        uri: '/api/users/authenticate', // todo: change to fit search
        payload: {
            username
        }
    }
}

let SearchUsersActions = {
    SearchUsers
};

export default SearchUsersActions
