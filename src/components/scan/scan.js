import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

import { getTicket } from "../../axios";
import { Ticket } from "./ticket";

export const Scan = () => {
  const [ticket, setTicket] = useState(null);
  const scanResultHandler = (result, error) => {
    if (!!result) {
      getTicket(result.text)
        .then((res) => {
          setTicket(res.data.ticket);
        })
        .catch((err) => {
          alert(err.response.data.error);
        });
    }

    if (!!error) {
      console.info(error);
    }
  };

  const scanMoreHandler = () => {
    setTicket(null);
  };

  return (
    <div>
      <h1>Scan</h1>
      {ticket ? (
        <Ticket
          adults={ticket.adults}
          children={ticket.children}
          status={ticket.status}
          site={ticket.site}
          onScanMore={scanMoreHandler}
        />
      ) : (
        <div>
          <QrReader
            onResult={scanResultHandler}
            constraints={{ facingMode: "environment" }}
          />
        </div>
      )}
    </div>
  );
};
