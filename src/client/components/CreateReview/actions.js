import {CreateReviewActionsConstants} from './constants.js';



function CreateReview(username, restaurant, bathroom, staff, clean, drive, delivery, food, pictures) {
    return {
        type: CreateReviewActionsConstants.CREATE_REVIEW,
        uri: '/api/reviews',
        payload: {
            username,
            restaurant,
            bathroom,
            staff,
            clean,
            drive,
            delivery,
            food,
            pictures
        }
    }
}

let CreateReviewActions = {
    CreateReview
};

export default CreateReviewActions
