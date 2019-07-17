import initialState from '../../initialState'
import {SignUpActionsConstants} from "./constants";

const SignUpReducer = (state = initialState.signUp, action) => {


    switch (action.type) {
        // case "onChane":
        //     break;
        // case "onSuccessReg":
        //     console.log("Success");
        //     break;
        // case "onFailureReg":
        //     console.log("Failure: ", action.message);
        //     break;
        case SignUpActionsConstants.UpdateUsernameAction:
            return state.set('username', action.payload.username);
        default:
            return state; // state is lost
    }
};

export default SignUpReducer
