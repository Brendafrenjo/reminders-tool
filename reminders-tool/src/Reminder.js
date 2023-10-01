import React from "react";

export default function Reminder(props) {
  return (
    <span>
      <div>{props.reminder}</div>
      <button>Delete</button>
    </span>
  );
}
