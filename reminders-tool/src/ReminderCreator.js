import React, { useState } from "react";

export default function ReminderCreator() {
    const [message, setMessage] = useState(null)

function handleSubmit(event) {
    event.preventDefault();
    message()
}

function handleChange(event) {
  setMessage(event.target.value)
}
  
  <div className="ReminderCreator">
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type Reminder here..."
        autoFocus="on"
        className="form-control w-100"
        onChange={handleChange}
      />
      <input type="submit" value="Add Reminder" className="btn btn-primary" />
    </form>
  </div>;
}
