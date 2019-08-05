import initialState from "../../initialState";


const ViewProfileReducer = (state = initialState.viewProfile, action) => {
    console.log('ViewProfileReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onSuccessLoadUser":
            state = state.set("username",action.value.username);
            state = state.set("location",action.value.location);
            localStorage.setItem("location", action.value.location);
            return state = state.set("picture",action.value.img);
        case "onFailLoadUser":
            console.log("onFailureReg");
            return state;
        case "onUsernameChange":
            return state.set('username', action.value);
        case "onLocationChange":
            return state.set('location', action.value);
        default:
            return state; // state is lost
    }
};

export default ViewProfileReducer
