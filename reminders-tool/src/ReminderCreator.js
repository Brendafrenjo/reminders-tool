import React, { useState } from "react";
import { connect } from "react-redux";
import { addReminder } from "./actions";

function ReminderCreator(props) {
  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    props.addReminder(message);
    setMessage("");
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className="ReminderCreator">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type Reminder here..."
          autoFocus="on"
          className="form-control w-100 text-center"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Add Reminder"
          className="btn btn-primary w-100"
        />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addReminder: (text) => dispatch(addReminder(text)),
  };
}

export default connect(null, mapDispatchToProps)(ReminderCreator);
