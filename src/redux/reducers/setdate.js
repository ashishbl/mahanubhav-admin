const initState = "";

const setDate = (state = initState, action) => {
  switch (action.type) {
    case "GETADMININFO":
      return (state = action.payload);
      break;
    case "GETMNTHYR":
      return (state = action.payload);
      break;
    case "COLLSIDEBAR":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};

export default setDate;
