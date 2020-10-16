const initialState = {
    sort: "followers",
    open: false
};

const timelineReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case "SET_SORT":
            return {
                ...state,
                sort: payload
            };
        case "HANDLE_RESET":
            return {
                ...initialState
            };
        case "TOGGLE_DRAWER":
            return {
                ...state,
                open: payload
            };
        default:
            return state;
    }
};

export default timelineReducer;
