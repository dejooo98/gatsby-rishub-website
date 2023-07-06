import React from "react"
import { Link } from "gatsby"

export const SingleNewsItem = ({ news }) => {
  return (
    <div className="news-card">
      {/* <img className="news-card__image" src={news.image} alt={news.title} /> */}
      <span className="news-card__image">ss</span>
      <div className="news-card__content">
        <h4 className="news-card__title">{news.title}</h4>
        <p className="news-card__text">{news.text.slice(0, 195)}...</p>
        <span className="news-card__date">{news.date}</span>
        <Link className="news-card__button button small-button" to="/">
          pročitaj više
        </Link>
      </div>
    </div>
  )
}
