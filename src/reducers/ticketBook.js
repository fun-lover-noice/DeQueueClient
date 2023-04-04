export const ticketBookReducer = (state, action) => {
  switch (action.type) {
    case "SET_SITE":
      return { ...state, site: action.payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_DATE_TIME":
      return { ...state, dateTime: action.payload };
    case "ADD_ADULT":
      return {
        ...state,
        adults: [
          ...state.adults,
          {
            id: Math.random().toString(),
            first_name: "",
            last_name: "",
            age: 18,
          },
        ],
      };
    case "EDIT_ADULT":
      const newAdults = Array.from(state.adults);
      newAdults[action.payload.index] = action.payload.data;
      return {
        ...state,
        adults: newAdults,
      };
    case "ADD_CHILD":
      return {
        ...state,
        children: [
          ...state.children,
          {
            id: Math.random().toString(),
            first_name: "",
            last_name: "",
            age: 5,
          },
        ],
      };
    case "EDIT_CHILD":
      const newChildren = Array.from(state.children);
      newChildren[action.payload.index] = action.payload.data;
      return {
        ...state,
        children: newChildren,
      };

    default:
      return state;
  }
};
