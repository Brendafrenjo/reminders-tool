import Recat from "react";
import { connect } from "react-redux";
import Reminder from "/.Reminder.js";

function ReminderContainer(props) {
  {
    const listReminders = props.reminders.map((reminder, index) => (
      <Reminder reminder={reminder} key={index} />
    ));

    return (
      <div>
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