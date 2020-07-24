export const AppReducer = (state, action) => {
  switch (action.type) {
    case "animationForeground1":
      return { data: { ...state.data, animationForeground1: action.payload } };
    case "animationForeground2":
      return { data: { ...state.data, animationForeground2: action.payload } };
    case "animationBackground1":
      return { data: { ...state.data, animationBackground1: action.payload } };
    case "animationBackground2":
      return { data: { ...state.data, animationBackground2: action.payload } };
    default:
      return state;
  }
};
