import React from "react"
import testImg from "../../../assets/images/test-img.png"
import factNumbers from "../../../constants/factNumbers"
import { Link } from "gatsby"

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__container--text-box">
            <h4 className="heading-4 margin-bottom-small">DOBRODOŠLI</h4>
            <h1 className="heading-1 margin-bottom-small">
              RisHub, prostor gde se
              <br />
              <span class="primary">inspiracija</span>,
              <span class="primary">produktivnost</span> i
              <span class="primary"> zajednica </span>
              sjedinjuju.
            </h1>
            <p className="big-text margin-bottom-medium">
              {" "}
              RisHub je dizajniran sa ciljem da pruži idealno okruženje za rad,
              saradnju i umrežavanje. Bez obzira da li ste samostalni
              preduzetnik, freelancer ili tim, naš prostor je stvoren da
              zadovolji sve vaše potrebe.
            </p>
            <Link className="button" to="/o-nama">
              Više O RisHabu
            </Link>
            <div className="hero__counter">
              {factNumbers.map((count, index) => {
                return (
                  <div className="hero__counter--box" key={index}>
                    <span className="hero__counter--box-number">
                      {count.number}
                    </span>
                    <span className="hero__counter--box-text">
                      {count.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="hero__container--image-box">
            <img className="hero__container--image" src={testImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
