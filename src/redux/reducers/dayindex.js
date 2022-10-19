const initState = 0;

const dayIndex = (state = initState, action) => {
  switch (action.type) {
    case "GETDAYINDEX":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};

export default dayIndex;
