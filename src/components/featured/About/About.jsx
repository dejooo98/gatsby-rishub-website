import React from "react"
import { smallText } from "./aboutText"
import { Link } from "gatsby"
import img1 from "../../../assets/images/test-img2.png"

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="heading-2">O nama</h2>
        <div className="about__container flex">
          <div className="about__container--img-box">
            <img src={img1} alt="" />
          </div>
          <div className="about__container--text-box">
            <p className="long-text margin-bottom-medium">{smallText}</p>
            <Link className="button" to="/o-nama">
              Više O RisHabu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
