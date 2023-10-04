import React from "react";
import { connect } from "react-redux";
import { deleteReminder } from "./actions";

function Reminder(props) {
  return (
    <div>
      <div>{props.reminder}</div>
      <button onClick={() => props.deleteReminder(props.reminder)}>
        Delete
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteReminder: function (reminder) {
      dispatch(deleteReminder(reminder));
    },
  };
}

export default connect (null, mapDispatchToProps)(Reminder)