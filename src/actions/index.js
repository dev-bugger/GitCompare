export const setUserProfileData = (payload, input) => {
    return {
        type: "SET_USER_PROFILE",
        payload,
        input
    };
};
export const setLoading = (payload) => {
    return {
        type: "SET_LOADING",
        payload
    };
};
export const handleError = (payload) => {
    return {
        type: "HANDLE_ERROR",
        payload
    };
};
export const handleReset = () => {
    return {
        type: "HANDLE_RESET"
    };
};

export const setSort = (payload) => {
    return {
        type: "SET_SORT",
        payload
    };
};

export const setAlert = (payload) => ({
    type: "SET_ALERT",
    payload
});

export const closeAlert = () => ({
    type: "CLOSE_ALERT"
});
