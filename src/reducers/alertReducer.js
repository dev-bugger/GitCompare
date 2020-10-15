const initialState = {
    text: null,
    type: null,
    open: false,
    status: null
};
const alertReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case "SET_ALERT":
            return {
                ...state,
                text: payload.text,
                type: payload.type,
                open: true,
                status: payload.status
            };
        case "CLOSE_ALERT":
            return {
                ...initialState
            };

        default:
            return state;
    }
};

export default alertReducer;
