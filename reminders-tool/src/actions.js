export const ADD_REMINDER = "ADD_REMINDER"

export function addReminder(text) {
  return {
    type: "ADD_REMINDER",
    payload: text,
  };
}
