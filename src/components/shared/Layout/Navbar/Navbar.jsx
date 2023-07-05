import React from "react"
import navLinks from "../../../../constants/navLinks"
import { SingleNavbarItem } from "./SingleNavbarItem"
import logo from "../../../../assets/images/rishub-logo.png"

export const Navbar = () => {
  return (
    <nav className="navbar container">
      <span className="navbar__logo-box">
        <img className="navbar__logo" src={logo} alt="RisHub logo" />
      </span>
      <ul className="navbar__list">
        {navLinks.map((link, index) => {
          return <SingleNavbarItem key={index} link={link} />
        })}
      </ul>
      <div className="navbar__burger">
        <div className="navbar__burger--line"></div>
        <div className="navbar__burger--line"></div>
        <div className="navbar__burger--line"></div>
      </div>
    </nav>
  )
}
