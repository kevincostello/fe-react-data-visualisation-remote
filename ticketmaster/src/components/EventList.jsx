import React, { Component } from "react";
import EventCard from "./EventCard";

// https://app.ticketmaster.com/discovery/v2/events.json?dmaId=324&apikey=56HXM4CNBHPHGG5ZsnfmrFO7LA9oSvz2

export default class EventList extends Component {
  state = {
    events: [
      {
        name: "Eagles",
        type: "event",
        id: "vv1AaZAqAGkdPXfSW",
        test: false,
        url:
          "https://www.ticketmaster.com/eagles-inglewood-california-09-26-2020/event/09005745E5F94CFD",
        locale: "en-us",
        images: [
          {
            ratio: "4_3",
            url:
              "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg",
            width: 305,
            height: 225,
            fallback: false,
          },
        ],

        dates: {
          start: {
            localDate: "2020-09-26",
            localTime: "20:00:00",
            dateTime: "2020-09-27T03:00:00Z",
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: "America/Los_Angeles",
          status: {
            code: "rescheduled",
          },
          spanMultipleDays: false,
        },
      },
      {
        name: "Eagles",
        type: "event",
        id: "vv1AaZAqAGkdPWfSB",
        test: false,
        url:
          "https://www.ticketmaster.com/eagles-inglewood-california-09-25-2020/event/09005745E5F54CFA",
        locale: "en-us",
        images: [
          {
            ratio: "4_3",
            url:
              "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg",
            width: 305,
            height: 225,
            fallback: false,
          },
        ],
        dates: {
          start: {
            localDate: "2020-09-25",
            localTime: "20:00:00",
            dateTime: "2020-09-26T03:00:00Z",
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: "America/Los_Angeles",
          status: {
            code: "rescheduled",
          },
          spanMultipleDays: false,
        },
      },
    ],
    isLoading: true,
  };

  render() {
    const { events, isLoading } = this.state;
    if (isLoading) return <p>Loading events.........</p>;
    return (
      <main>
        <h2>List of Events</h2>
        <ul>
          {events.map((event) => {
            return <EventCard event={event} key={event.id} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    const url =
      "https://app.ticketmaster.com/discovery/v2/events.json?dmaId=324&apikey=56HXM4CNBHPHGG5ZsnfmrFO7LA9oSvz2";
    fetch(url)
      .then((buffer) => buffer.json())
      .then((res) => {
        const events = res._embedded.events;
        console.log("events array", events, Array.isArray(events));
        this.setState({ events, isLoading: false });
      });
  }
}
