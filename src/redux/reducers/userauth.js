const initState = "";

const userAuth = (state = initState, action) => {
  switch (action.type) {
    case "GETUSERROLE":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};
export default userAuth;
