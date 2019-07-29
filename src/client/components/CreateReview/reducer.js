import initialState from '../../initialState'
import CreateReview from "./CreateReview";

const CreateReviewReducer = (state = null, action) => {
    console.log('createReviewReducer=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "sortReviewsByScore":
            console.log("good");
            return state;
        case "onSuccessCreateReview":
            console.log("good");
            return state;
        case "onFailureCreateReview":
            console.log(action.message);
            return state;
    }
    return state;
};

export default CreateReviewReducer
