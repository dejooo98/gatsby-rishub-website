import React from "react"
import Layout from "../components/shared/Layout/Layout"
import { Features } from "../components/shared/Features/Features"
import { About } from "../components/featured/About/About.jsx"
import { News } from "../components/featured/News/News"
import { Events } from "../components/featured/Events/Events"

const index = () => {
  return (
    <Layout>
      <Features />
      <About />
      <News />
      <Events />
    </Layout>
  )
}

export default index
