import initialState from '../../initialState'

const ViewUserReviewsReducer = (state = initialState.viewUserReviews, action) => {
    console.log('ViewUserReviewsReducerState=', state);
    console.log('onSuccessDeleterReviewRECEIVED ACTION:', action);
    switch (action.type) {
        case "onSuccessLoadThisUserReviews":
            state = state.set("reviews", action.value);
            return state;
        case "onSuccessDeleterReview":
            state = state.set("action", "done");
            //this.forceUpdate();
            return state;
        default:
            return state; // state is lost
    }
};

export default ViewUserReviewsReducer
