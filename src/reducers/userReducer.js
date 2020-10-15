const initialState = {
    userNames: [],
    userData: [],
    loading: false,
    sort: "followers",
    screen: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_NAME":
            return {
                ...state,
                userNames: action.payload,
                userData: [],
                screen: action.payload.length
            };
        case "SET_USER_PROFILE":
            return {
                ...state,
                userData: state.userData.concat(action.payload)
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        case "HANDLE_ERROR":
            return {
                ...state,
                userNames: state.userNames.slice(0, -1),
                screen: state.userNames.length - 1
            };

        case "SET_SORT":
            return {
                ...state,
                sort: action.payload
            };
        case "HANDLE_RESET":
            return {
                ...initialState
            };
        default:
            return { ...state };
    }
};

export default userReducer;
