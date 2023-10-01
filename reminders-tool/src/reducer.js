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
    case "DELETE_ITEM":
      return {
        reminders: [
          ...state.reminders.filter((reminder) => reminder !== action.payload),
        ],
      };
    default:
      return state;
  }
}

export default remindersReducer;
