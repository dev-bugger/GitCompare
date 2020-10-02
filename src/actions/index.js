export const getUserName = (payload) => {
  return {
    type: "GET_USER_NAME",
    payload,
  };
};
export const setUserProfileData = (payload) => {
  return {
    type: "SET_USER_PROFILE",
    payload,
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
    type: "HANDLE_RESET",
  };
};

export const handleAlert = (payload) => {
  return {
    type: "HANDLE_ALERT",
    payload
  }
}

export const setSort = (payload) => {
  return {
    type:"SET_SORT",
    payload
  }
}
