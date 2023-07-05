import React from "react"
import features from "../../../constants/features"

export const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__list">
          {features.map((feature, index) => {
            return (
              <div key={index} className="features__item">
                <span className="features__item--icon margin-bottom-medium">
                  {feature.icon}
                </span>
                <span className="features__item--text">{feature.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
