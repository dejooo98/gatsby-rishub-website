import React from "react"
import { Link } from "gatsby"

export const SingleEventItem = ({ event }) => {
  return (
    <div className="event-card">
      {/* <img className="event-card__image" src={event.image} alt={event.title} /> */}
      <span className="event-card__image">ss</span>
      <div className="event-card__content">
        <h4 className="event-card__title">{event.title}</h4>
        <p className="event-card__text">{event.text.slice(0, 195)}...</p>
        <span className="event-card__date">{event.date}</span>
        <Link className="event-card__button button small-button" to="/">
          pročitaj više
        </Link>
      </div>
    </div>
  )
}
