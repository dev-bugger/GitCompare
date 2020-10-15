const initialState = {
    sort: "followers"
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
        default:
            return state;
    }
};

export default timelineReducer;
