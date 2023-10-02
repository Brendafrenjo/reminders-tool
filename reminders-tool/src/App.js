import "./App.css";
import { connect } from "react-redux";
import ReminderCreator from "./ReminderCreator";

function App() {
  return (
    <div className="App">
      <div>Add Reminders</div>
      <ReminderCreator />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    reminders: state.reminders,
  };
}

export default connect(mapStateToProps)(App);
