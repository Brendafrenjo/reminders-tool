import "./App.css";
import { connect } from "react-redux";
import ReminderCreator from "./ReminderCreator";
import ReminderContainer from "./ReminderContainer";

function App() {
  return (
    <div className="App">
      <div>Add Reminders</div>
      <ReminderCreator />
      <ReminderContainer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    reminders: state.reminders,
  };
}

export default connect(mapStateToProps)(App);
