const initialState = {
  reminders: [],
};

function remindersReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_REMINDER":
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    default:
      return state;
  }
}

export default remindersReducer;