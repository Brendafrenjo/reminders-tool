import "./App.css";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <p>Reminders App</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    names: state.names,
  };
}

export default connect(mapStateToProps)(App);
