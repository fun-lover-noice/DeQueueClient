import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

import { getTicket } from "../axios";
import { Card } from "react-bootstrap";

export const Ticket = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getTicket(params.ticketId)
      .then((res) => {
        setData(res.data.ticket);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  }, [params]);

  return (
    <div className="d-flex justify-content-center">
      <Card className="my-5 py-5 text-center w-100 shadow">
        {data && (
          <div>
            {data.status === "valid" && (
              <div>
                <QRCode value={data._id} />
              </div>
            )}
            <div>ID: {data._id}</div>
            <div>Status: {data.status}</div>
            <div>Site: {data.site.name}</div>
            <div>Adults: {data.adults}</div>
            <div>Children: {data.children}</div>
          </div>
        )}
      </Card>
    </div>
  );
};
