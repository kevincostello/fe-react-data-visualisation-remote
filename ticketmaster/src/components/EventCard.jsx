import React from "react";

function EventCard({ event }) {
  console.log(event);

  return (
    <li>
      <h3>Event description: {event.name}</h3>
      <h3>Event date: {event.dates.start.localDate}</h3>
    </li>
  );
}

export default EventCard;
