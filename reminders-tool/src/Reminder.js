import React from "react";

export default function Reminder(props) {
  return (
    <div>
      <div>{props.reminder}</div>
      <button>Delete</button>
    </div>
  );
}
