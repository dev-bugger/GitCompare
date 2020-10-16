const initialState = {
    userNames: [],
    userData: [],
    loading: false,
    screen: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {
                ...state,
                userData: state.userData.concat(action.payload),
                userNames: state.userNames.concat(action.input),
                screen: state.userNames.length + 1 > 0
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        case "HANDLE_ERROR":
            return {
                ...state,
                screen: state.userNames.length > 0,
                loading: false
            };
        case "HANDLE_RESET":
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default userReducer;
