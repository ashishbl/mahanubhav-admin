const initState = 0;

const newState = (state = initState, action) => {
  switch (action.type) {
    case "GETNEWSTATE":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};

export default newState;
