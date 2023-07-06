import React from "react"
import events from "../News/mockedData"
import { SingleEventItem } from "./SingleEventItem"

export const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <h2 className="heading-2 margin-bottom-medium">Događaji</h2>
        <div className="events__container">
          {events.slice(0, 3).map((item, index) => {
            return <SingleEventItem key={index} event={item} />
          })}
        </div>
      </div>
    </section>
  )
}
