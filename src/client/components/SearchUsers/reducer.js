import initialState from '../../initialState'

const SearchUsersReducer = (state = initialState.searchUsers, action) => {
    console.log('SearchUsersReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "filterUsersByName":
            state.set('searchValue', action.value);
            let len = action.value.length;
            return state = state.set("searchUsers", state.get("backup").filter((user) => {
                    return user.name.substring(0, len) === action.value;
                }
            ));
        case "onFailureReg":
            console.log("onFailureReg");
            return state;
        default:
            return state; // state is lost
    }
};

export default SearchUsersReducer
