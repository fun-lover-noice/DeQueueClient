import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import config from "../../config";

export const Site = (props) => {
  const bannerUrl = config.serverUrl + props.site.image;
  const adultTicketPrice =
    props.site.price.adult === 0 ? "Free Entry" : `₹${props.site.price.adult}`;
  const childTicketPrice =
    props.site.price.child === 0 ? "Free Entry" : `₹${props.site.price.child}`;
  const onImageLoad = (event) => {
    event.target.style.animation = "fade-in 0.7s ease-in forwards";
  };
  return (
    <Card
      className="shadow zoom-enter"
      style={{ animationDelay: `${0.2 * props.index}s` }}
    >
      <Card.Img
        className="fade-in"
        variant="top"
        src={bannerUrl}
        width={180}
        height={220}
        style={{ objectFit: "cover" }}
        onLoad={onImageLoad}
      />
      <Card.Body>
        <Card.Title>{props.site.name}</Card.Title>
        <Card.Text className="overflow-hidden" style={{ maxHeight: "6rem" }}>
          {props.site.description}
        </Card.Text>
        <Card.Subtitle className="mb-4 text-muted">{`Adult: ${adultTicketPrice}, Child: ${childTicketPrice}`}</Card.Subtitle>
        <Button
          variant="primary"
          size="sm"
          as={Link}
          to={`${props.site._id}/book`}
        >
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
};
