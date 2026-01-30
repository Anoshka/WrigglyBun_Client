import React from "react";
import { Link } from "react-router-dom";
import "./EventsPage.scss";
import { useEvents } from "../../cms/useEvents";

const EventsPage = () => {
  const { events, loading } = useEvents();

  if (loading) return <div className="events-page">Loading…</div>;
  if (!events?.length) return <div className="events-page">No upcoming events yet.</div>;

  return (
    <div className="events-page">
      <h1 className="events-page__title">Upcoming Events</h1>
      <div className="events-page__grid">
        {events.map((event) => (
          <Link to={`/events/${event.slug}`} className="events-page__card" key={event.slug}>
            {event.image && <img src={event.image} alt={event.title} className="events-page__img" />}
            <div className="events-page__content">
              <h2 className="events-page__card-title">{event.title}</h2>
              {event.eventDate && <p className="events-page__date">{new Date(event.eventDate).toLocaleDateString()}</p>}
              {event.description && <p className="events-page__desc">{event.description}</p>}
              <span className="events-page__link">LEARN MORE →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
