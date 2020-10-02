const initialState = {
  userNames: [],
  userData: [],
  loading: false,
  alertOpen: false,
  sort: "followers",
  alertMsg: "",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_NAME":
      return {
        ...state,
        userNames: action.payload,
        userData: [],
      };
    case "SET_USER_PROFILE":
      return {
        ...state,
        userData: state.userData.concat(action.payload),
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "HANDLE_ERROR":
      return {
        ...state,
        userNames: state.userNames.slice(0, -1),
        alertOpen: true,
        alertMsg: action.payload,
      };
    case "HANDLE_ALERT":
      return {
        ...state,
        alertOpen: action.payload,
        alertMsg: "",
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    case "HANDLE_RESET":
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
