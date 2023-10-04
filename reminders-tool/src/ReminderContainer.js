import React from "react";
import { connect } from "react-redux";
import Reminder from "/.Reminder.js";
import "./ReminderContainer.css"

function ReminderContainer(props) {
  {
    const listReminders = props.reminders.map((reminder, index) => (
      <Reminder reminder={reminder} key={index} />
    ));

    return (
      <div className="styles">
        <h2>Type Reminders Below:</h2>
        {listReminders}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { reminders: state.reminder };
}

export default connect(mapStateToProps)(ReminderContainer)