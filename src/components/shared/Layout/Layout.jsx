import React from "react"
import { Navbar } from "./Navbar/Navbar"
import { Footer } from "./Footer/Footer"

import "../../../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
