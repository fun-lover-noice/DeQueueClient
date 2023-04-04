import React from "react";

import { Adults } from "./people/adults";
import { DateTime } from "./dateTime";
import { Children } from "./people/children";
import { Submit } from "./submit";

export const Page = (props) => {
  const dateTimeChangeHandler = (newDateTime) => {
    props.dispatch({ type: "SET_DATE_TIME", payload: newDateTime });
  };

  const addAdultHandler = () => {
    props.dispatch({ type: "ADD_ADULT" });
  };

  const editAdultHandler = (index, data) => {
    props.dispatch({ type: "EDIT_ADULT", payload: { index, data } });
  };

  const addChildHandler = () => {
    props.dispatch({ type: "ADD_CHILD" });
  };

  const editChildHandler = (index, data) => {
    props.dispatch({ type: "EDIT_CHILD", payload: { index, data } });
  };

  switch (props.step) {
    case 1:
      return (
        <DateTime
          dateTime={props.state.dateTime}
          onDateTimeChange={dateTimeChangeHandler}
        />
      );
    case 2:
      return (
        <Adults
          adults={props.state.adults}
          onAddAdult={addAdultHandler}
          onEditAdult={editAdultHandler}
        />
      );
    case 3:
      return (
        <Children
          children={props.state.children}
          onAddChild={addChildHandler}
          onEditChild={editChildHandler}
        />
      );
    case 4:
      return (
        <Submit
          onSubmit={props.onSubmit}
          adults={props.state.adults}
          children={props.state.children}
          price={props.state.site.price}
        />
      );

    default:
      return <>Noice</>;
  }
};
