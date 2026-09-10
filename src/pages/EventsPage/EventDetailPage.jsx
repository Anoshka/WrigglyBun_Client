import React from "react";
import { Link, useParams } from "react-router-dom";
import "./EventsPage.scss";
import { useEvent } from "../../cms/useEvents";
import CmsRichText from "../../components/CmsRichText";

const EventDetailPage = () => {
  const { slug } = useParams();
  const { event, loading, error } = useEvent(slug);

  if (loading) return <div className="events-page event-detail-page">Loading…</div>;
  if (error || !event) return <div className="events-page event-detail-page">Event not found.</div>;

  return (
    <article className="events-page event-detail-page">
      <Link to="/events" className="event-detail-page__back">← Back to Events</Link>
      <h1 className="event-detail-page__title">{event.title}</h1>
      {event.eventDate && <p className="event-detail-page__date">{new Date(event.eventDate).toLocaleDateString()}</p>}
      {event.description && <p className="event-detail-page__description">{event.description}</p>}
      {event.thumbnail && <img src={event.thumbnail} alt={event.title} className="event-detail-page__thumb" />}
      {event.images?.length > 0 && (
        <div className="event-detail-page__images">
          {event.images.map((url, i) => (
            <img key={i} src={url} alt="" className="event-detail-page__img" />
          ))}
        </div>
      )}
      {event.body && (
        <CmsRichText value={event.body} className="event-detail-page__body" />
      )}
      {event.link && (
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-detail-page__link">
          External link →
        </a>
      )}
    </article>
  );
};

export default EventDetailPage;
