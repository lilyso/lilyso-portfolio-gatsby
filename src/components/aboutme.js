import React from "react"
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

        <div id="about" className="text-lg m-4 px-4 w-full lg:w-1/2">
          <h2 className="text-4xl md:text-6xl lg:text-6xl md:text-left lg:text-left text-center">
            About
          </h2>
          <p>
            I'm a Sydney-based web developer and Braze Certified Digital Strategist with over 8 years of experience in digital marketing. I specialise in email marketing, CRM, marketing automation, content strategy and social media marketing.
          </p>
          <p>
            I've worked with brands like Optus, Audio-Technica and PetO, as well as small businesses across hospitality and ecommerce.
          </p>
          <p>
            I'm currently open to freelance and full-time opportunities.
          </p>
        </div>
        <Carousel />
      </div>
    </LazyShow>
  )
}

export default AboutMe
