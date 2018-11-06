export default (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_PC":
      return [...state, action.payload];
    default:
      return state;
  }
};
