import React from "react"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Trips />
  </Layout>
)

export default IndexPage
