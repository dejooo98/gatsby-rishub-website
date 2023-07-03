import React from "react"
import { Link } from "gatsby"

export const SingleNavbarItem = ({ link }) => {
  return (
    <li>
      <Link to={link.path}>{link.text}</Link>
    </li>
  )
}
