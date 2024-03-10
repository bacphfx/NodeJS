const initialState = {
  userId: "",
};

const ReducerSession = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      console.log("userId: ", action.data);

      const stateLogin = [...state.userId];
      stateLogin.userId = action.data;
      return stateLogin;

    case "DELETE_SESSION":
      console.log("userId: ", action.data);

      const stateLogout = [...state.userId];
      stateLogout.userId = action.data;
      return stateLogout;

    default:
      return state;
  }
};

export default ReducerSession;
