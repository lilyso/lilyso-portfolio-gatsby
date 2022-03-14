import React from "react"
import LazyShow from "./lazyshow"
import { StaticImage } from "gatsby-plugin-image"

const AboutMe = () => {
  return (
    <LazyShow>
      <div className="md:m-8 lg:m-12  border-solid border-white border-l text-left flex flex-wrap text-white">
        {/* <StaticImage
          src="../images/sydney.png"
          alt="sydney harbour bridge from observatory hill"
          className="opacity-50 mb-8 w-full md:w-1/2 lg:w-1/3"
        /> */}

        <div className="text-lg m-4 px-4 w-full lg:w-1/2">
          <h2 className="text-6xl">About</h2>
          <p>
            I'm a Sydney-based web developer and I'm currently open to freelance
            and full-time opportunites.
          </p>
          <p>
            I have over 8 years of experience in Digital Marketing, specialising
            in Content Strategy, Social Media Marketing &amp; Email Marketing.
          </p>
          <p>
            I have worked with brands such as Optus, Audio-Technica &amp; PetO,
            along with a range of small businesses in hospitality and ecommerce.
          </p>
        </div>
      </div>
    </LazyShow>
  )
}

export default AboutMe
