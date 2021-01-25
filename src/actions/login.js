export const loginSuccess = user => {
  console.log(user);
  return {
    type: "LOGIN_SUCCESS",
    token: user.user.token,
  };
};
