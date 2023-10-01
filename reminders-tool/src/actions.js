export const ADD_REMINDER = "ADD_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

export function addReminder(text) {
  return {
    type: "ADD_REMINDER",
    payload: text,
  };
}

export function deleteReminder(text) {
  return {
    type: "DELETE_REMINDER",
    payload: text,
  };
}
