import initialState from '../../initialState'
import CreateReview from "./CreateReview";

const CreateReviewReducer = (state = null, action) => {
    console.log('CreateReviewReducer=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "sortReviewsByScore":
            console.log("good");
            return state;
        case "onSuccessReg":
            console.log("good");
            return state;
        case "onFailureReg":
            //console.log(action.message);
            return state;
    }
    return state;
};

export default CreateReviewReducer
