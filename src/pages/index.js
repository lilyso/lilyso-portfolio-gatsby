import * as React from "react"

import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TechnicalSkills from "../components/technical-skills"
import AboutMe from "../components/aboutme"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <TechnicalSkills />
    <AboutMe />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
