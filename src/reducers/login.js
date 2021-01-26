const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.user,
      };

    default:
      return state;
  }
};

export default loginReducer;
