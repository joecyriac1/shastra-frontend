
import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-card-image" />
      <div className="event-card-content">
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <Link to={`/events/${event.id}`} className="event-card-link">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

