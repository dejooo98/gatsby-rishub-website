import React from "react"
import navLinks from "../../../../constants/navLinks"
import { SingleNavbarItem } from "./SingleNavbarItem"
import logo from "../../../../assets/images/rishub-logo.png"

export const Navbar = () => {
  return (
    <nav>
      <span>
        <img className="logo-test" src={logo} alt="Rishub logo" />
      </span>
      <ul>
        {navLinks.map((link, index) => {
          return <SingleNavbarItem key={index} link={link} />
        })}
      </ul>
    </nav>
  )
}
