import {SignUpActionsConstants} from "../SignUp/constants";

function Create(name, description, location, picture) {
    alert("mada");
    return {
        type: "Create",
        uri: '/api/restaurants',
        payload: {
            username,
            description,
            location,
            picture
        }
    }
}

let CreateRestaurantActions = {
    Create
};

export default CreateRestaurantActions
