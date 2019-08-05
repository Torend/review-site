import initialState from '../../initialState'

const ViewUserReducer = (state = initialState.viewUser, action) => {
    console.log('ViewUserReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onSuccessLoadUserReviews":
            let lst =  state.get("userReviews").push(action.value);
            state = state.set("userReviews", lst);
            return state;
        default:
            return state; // state is lost
    }
};

export default ViewUserReducer
