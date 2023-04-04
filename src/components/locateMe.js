import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { getCityByLocation } from "../axios";

export const LocateMe = () => {
  const [getLocationError, setGetLocationError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        getCityByLocation({ lat, long })
          .then((res) => {
            navigate(`/?city=${res.data.city}`);
          })
          .catch((err) => {
            setGetLocationError(err.response.data.error);
          });
      },
      (e) => {
        setGetLocationError(e.message);
      }
    );
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {!getLocationError && <Spinner animation="grow" variant="primary" />}
      <h4 className="mx-3 mt-1">{getLocationError || "Locating You...."}</h4>
    </div>
  );
};
