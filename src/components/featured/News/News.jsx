import React from "react"
import news from "./mockedData"
import { SingleNewsItem } from "./SingleNewsItem"

export const News = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="heading-2 margin-bottom-medium">Vesti</h2>
        <div className="news__container">
          {news.slice(0, 3).map((item, index) => {
            return <SingleNewsItem key={index} news={item} />
          })}
        </div>
      </div>
    </section>
  )
}
