import React from "react";
import { Card, Form } from "react-bootstrap";

export const DateTime = (props) => {
  const dateTimeChangeHandler = (event) => {
    props.onDateTimeChange(event.target.value);
  };

  return (
    <div>
      <Card.Title>Date and Time</Card.Title>
      <Form.Control
        type="datetime-local"
        value={props.dateTime}
        step={60 * 30}
        onChange={dateTimeChangeHandler}
      />
    </div>
  );
};
