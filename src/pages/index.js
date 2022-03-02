import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TechnicalSkills from "../components/technical-skills"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <TechnicalSkills />
  </Layout>
)

export default IndexPage
