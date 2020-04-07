import React, { Component } from "react";
import EventCard from "./EventCard";
import BarChart from "./BarChart";

// https://app.ticketmaster.com/discovery/v2/events.json?dmaId=324&apikey=56HXM4CNBHPHGG5ZsnfmrFO7LA9oSvz2

export default class EventList extends Component {
  state = {
    events: [],
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
        <BarChart events={events} />
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
        this.setState({ events, isLoading: false });
      });
  }
}
