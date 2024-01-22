import React from "react"
import EmailSection from "../components/EmailSection"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Trips heading='Our Favorite Destinations' />
    <Testimonials />
    <Stats />
    <EmailSection />
  </Layout>
)

export default IndexPage
