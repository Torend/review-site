import {SignUpActionsConstants} from "../SignUp/constants";

function Create(name, description, location, picture) {
    return {
        type: "CreateNewRestaurant",
        uri: '/api/restaurants',
        payload: {
            name,
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
