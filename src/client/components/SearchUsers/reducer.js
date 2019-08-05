import initialState from '../../initialState'

const SearchUsersReducer = (state = initialState.searchUsers, action) => {
    console.log('SearchUsersReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type) {
        case "filterUsersByName":
            state.set('searchValue', action.value);
            let len = action.value.length;
            return state = state.set("users", state.get("backup").filter((user) => {
                    return user.username.substring(0, len) === action.value;
                }
            ));
        case "onSuccessLoadUsers":
            state = state.set("users", action.value);
            state = state.set("backup", action.value);
            return state;
        default:
            return state; // state is lost
    }
};

export default SearchUsersReducer
