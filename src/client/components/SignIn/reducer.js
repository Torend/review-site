import initialState from '../../initialState'

const SignInReducer = (state = initialState.signIn, action) => {
    console.log('SignInReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "onUsernameChange":
            return state.set('username', action.value);
        case "onSubmit":
            console.log("onSubmit");
            return state;
        case "onSuccess":
            console.log("onSuccess");
            return state;
        case "onFailure":
            console.log("onFailure");
            return state;
        default:
            return state; // state is lost
    }
};

export default SignInReducer
