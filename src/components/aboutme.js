import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import LazyShow from "./lazyshow"
import Carousel from "./carousel"

const AboutMe = () => {
  return (
    <LazyShow>
      <div className="md:m-8 lg:m-12 border-solid border-white border-l text-left items-center flex flex-wrap lg:flex-nowrap text-white">
        {/* <StaticImage
          src="../images/sydney.png"
          alt="sydney harbour bridge from observatory hill"
          className="opacity-50 mb-8 w-full md:w-1/2 lg:w-1/3"
        /> */}

        <div id="about" className="text-lg m-4 px-4 w-full lg:w-1/2 space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-6xl md:text-left lg:text-left text-center">
            About
          </h2>
          <p>
            Hi, I'm Lily, a Sydney-based developer and digital strategist who
            bridges the gap between code and campaigns.
          </p>
          <p>
            Day to day, I build websites, plan the strategy behind them, and
            keep projects moving from kickoff to launch. I'm also a Braze
            Certified Digital Strategist, so a lot of my time goes into CRM,
            email and marketing automation: making sure the right message
            reaches the right person at the right time.
          </p>
          <p>
            Over the past ten-plus years I've worked with brands like Optus,
            Audio-Technica and PetO, as well as small to medium businesses
            across hospitality, ecommerce and entertainment. Lately I've been
            bringing AI into the mix to build smarter automations and speed up
            development.
          </p>
          <p>
            I'm open to freelance and full-time work, so{" "}
            <AnchorLink
              to="#contact"
              title="Contact"
              className="text-yellow-300 hover:underline"
            >
              let's chat →
            </AnchorLink>
          </p>
        </div>
        <Carousel />
      </div>
    </LazyShow>
  )
}

export default AboutMe
