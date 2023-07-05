import React from "react"
import { Navbar } from "./Navbar/Navbar"
import { Footer } from "./Footer/Footer"

import "../../../styles/main.scss"
import { Hero } from "../Hero/Hero"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
