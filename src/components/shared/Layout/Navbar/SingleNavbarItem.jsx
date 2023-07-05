import React from "react"
import { Link } from "gatsby"

export const SingleNavbarItem = ({ link }) => {
  return (
    <li className="navbar__item">
      <Link className="navbar__link" to={link.path}>
        {link.text}
      </Link>
    </li>
  )
}
