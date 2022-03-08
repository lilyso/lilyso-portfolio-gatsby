import React from "react"
import LazyShow from "./lazyshow"
import { StaticImage } from "gatsby-plugin-image"

const AboutMe = () => {
  return (
    <LazyShow>
      <div className="mx-auto justify-center my-4 flex text-white p-8">
        <StaticImage
          src="../images/sydney.png"
          alt="sydney harbour bridge from observatory hill"
          className="rounded-lg w-full md:w-1/3 lg:w-1/3"
        />

        <div className="mx-4 p-4 w-full md:w-1/3 lg:w-1/3">
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
