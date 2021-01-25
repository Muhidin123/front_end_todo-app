const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(action);
      return { jwt: action.token};

    default:
      return state;
  }
};

export default loginReducer;
