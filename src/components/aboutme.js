import React from "react"
import LazyShow from "./lazyshow"

const AboutMe = () => {
  return (
    <LazyShow>
      <div className="text-white p-8 mx-12">
        <div className="px-4 border-l-2 border-solid border-white w-full lg:w-1/2">
          <p>Hi,</p>
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
