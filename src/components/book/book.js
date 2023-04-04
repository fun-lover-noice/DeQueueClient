import React, { useReducer, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonGroup, Button, Card, Spinner } from "react-bootstrap";

import { Page } from "./page/page";
import { ticketBookReducer } from "../../reducers/ticketBook";
import { bookTicket, getSite } from "../../axios";
import config from "../../config";

const initialState = {
  step: 1,
  dateTime: "",
  adults: [
    { id: Math.random().toString(), first_name: "", last_name: "", age: 18 },
  ],
  children: [
    { id: Math.random().toString(), first_name: "", last_name: "", age: 5 },
  ],
};

export const Book = () => {
  const params = useParams();
  const [state, dispatch] = useReducer(ticketBookReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    getSite(params.siteId)
      .then((res) => {
        dispatch({ type: "SET_SITE", payload: res.data.site });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  }, [params]);

  const nextClickHandler = () => {
    dispatch({ type: "NEXT_STEP" });
  };
  const prevClickHandler = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const submitHandler = () => {
    setLoading(true);
    const adults = state.adults.filter((adult) => {
      return adult.first_name !== "";
    });
    const children = state.children.filter((child) => {
      return child.first_name !== "";
    });
    bookTicket({
      adults,
      children,
      booking_at: state.dateTime,
      site: state.site._id,
    })
      .then((res) => {
        window.location.href = res.data.payment_link;
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  const isPrevDisabled = state.step === 1 || loading;
  const isNextDisabled =
    state.step === 4 ||
    (state.step === 1 && state.dateTime === "") ||
    (state.step === 2 && state.adults[0].first_name === "");
  const heading = error || (state.site && state.site.name);
  const bannerUrl = state.site && config.serverUrl + state.site.image;
  const onImageLoad = (event) => {
    event.target.style.animation = "fade-in 0.7s ease-in forwards";
  };
  return (
    <Card className="shadow">
      <Card.Img
        className="fade-in"
        variant="top"
        src={bannerUrl}
        width={180}
        height={300}
        style={{ objectFit: "cover" }}
        onLoad={onImageLoad}
      />
      <Card.Body>
        <h3>{heading}</h3>
        <ButtonGroup className="mt-2 mb-3">
          <Button
            variant="primary"
            onClick={prevClickHandler}
            disabled={isPrevDisabled}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={nextClickHandler}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </ButtonGroup>
        {loading ? (
          <>
            <br />
            <Spinner className="m-3" animation="border" variant="primary" />
          </>
        ) : (
          state.site && (
            <Page
              step={state.step}
              state={state}
              dispatch={dispatch}
              onSubmit={submitHandler}
            />
          )
        )}
      </Card.Body>
    </Card>
  );
};
